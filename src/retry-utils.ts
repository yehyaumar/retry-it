import { delay } from "./delay";

export interface RetryOptions {
  attempts?: number;
  delayMs?: number;
}

/**
 * Retry any async function until it returns a meaningful value till number of attempts
 * @param {function} op - async function
 * @param {RetryOptions} options retry options
 * @returns Promise<result | undefined>
 */
export async function retry<T>(
  op: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T | undefined> {
  const { attempts = 5, delayMs = 3000 } = options;

  for (let i = 0; i < attempts; i++) {
    const result = await op();

    if (result) {
      return result;
    }

    await delay(delayMs);
  }

  return;
}
