import { HTTPError } from 'ky';
import { BatchOptions, ErrorResult } from '../types/helpers';

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const batchExecute = async <T, R>(
  items: T[],
  operation: (item: T) => Promise<R>,
  options: BatchOptions = {
    batchSize: 1,
    delayMs: 1000,
    initialRetryDelay: 1000,
    maxRetries: 5,
  }
): Promise<{ results: R[]; errors: ErrorResult<T>[] }> => {
  const { batchSize, delayMs, initialRetryDelay, maxRetries } = options;
  const results: R[] = [];
  const errors: ErrorResult<T>[] = [];

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);

    const batchPromises: Promise<R | null>[] = batch.map(async (item) => {
      let retries = 0;
      let retryDelay = initialRetryDelay;

      while (retries <= maxRetries) {
        try {
          return await operation(item);
        } catch (error: unknown) {
          if (
            error instanceof HTTPError &&
            error.response &&
            error.response.status === 429 &&
            retries < maxRetries
          ) {
            console.log(
              `Rate limit hit for item. Retrying in ${retryDelay}ms. Retry ${retries + 1}/${maxRetries}`
            );
            await delay(retryDelay);
            retries++;
            retryDelay *= 2; // backoff (exponential)
          } else {
            errors.push({ item, error });
            return null; // process next item
          }
        }
      }

      errors.push({ item, error: new Error('Max retries exceeded') });
      return null;
    });

    const batchResults: (R | null)[] = await Promise.all(batchPromises);
    results.push(
      ...batchResults.filter((result): result is R => result !== null)
    );

    if (i + batchSize < items.length) {
      await delay(delayMs);
    }
  }

  return { results, errors };
};
