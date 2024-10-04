import { BatchOptions } from '../types/api';

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const batchExecute = async <T, R>(
  items: T[],
  operation: (item: T) => Promise<R>,
  options: BatchOptions = { batchSize: 5, delayMs: 1000 }
): Promise<R[]> => {
  const { batchSize, delayMs } = options;
  const results: R[] = [];

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchPromises = batch.map((item) => operation(item));

    const batchResults = await Promise.all(batchPromises);
    results.push(...batchResults);

    if (i + batchSize < items.length) {
      await delay(delayMs);
    }
  }

  return results;
};
