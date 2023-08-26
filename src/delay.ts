export function delay(delayTime: number): Promise<void> {
  return new Promise<void>((resolve: any) => setTimeout(resolve, delayTime));
}
