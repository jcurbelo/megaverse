import { HTTPError } from 'ky';
import { BatchOptions } from '../types/helpers';

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const batchExecute = async <T, R>(
  items: T[],
  operation: (item: T) => Promise<R>,
  options: BatchOptions = {
    batchSize: 2,
    delayMs: 2000,
    initialRetryDelay: 1000,
    maxRetries: 3,
  }
): Promise<R[]> => {
  const { batchSize, delayMs, initialRetryDelay, maxRetries } = options;
  const results: R[] = [];

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    let retries = 0;
    let retryDelay = initialRetryDelay;

    while (retries <= maxRetries) {
      try {
        const batchPromises = batch.map((item) => operation(item));
        const batchResults = await Promise.all(batchPromises);
        results.push(...batchResults);
        break; // next batch
      } catch (error: unknown) {
        if (!(error instanceof HTTPError)) {
          throw error; // re-throw error
        }
        if (
          error.response &&
          error.response.status === 429 &&
          retries < maxRetries
        ) {
          console.log(
            `Rate limit hit. Retrying in ${retryDelay}ms. Retry ${retries + 1}/${maxRetries}`
          );
          await delay(retryDelay);
          retries++;
          retryDelay *= 2; // backoff (exponential)
        } else {
          throw error; // re-throw error
        }
      }
    }

    if (i + batchSize < items.length) {
      await delay(delayMs);
    }
  }

  return results;
};
