export type BatchOptions = {
  batchSize?: number;
  delayMs?: number;
  initialRetryDelay?: number;
  maxRetries?: number;
};

export type ErrorResult<T> = {
  item: T;
  error: unknown;
};
