import { delay } from "./delay";

export interface RetryOptions {
  attempts?: number;
  delayMs?: number;
}

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
