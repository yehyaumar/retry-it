/**
 * Delay execution flow for sometime in milliseconds
 * @param {number} delayTime in milliseconds
 * @returns Promise
 */
export function delay(delayTime: number): Promise<void> {
  return new Promise<void>((resolve: any) => setTimeout(resolve, delayTime));
}
