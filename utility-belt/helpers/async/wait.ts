/* eslint-disable id-match,no-magic-numbers,func-style */
/**
 * @description: Emulates wait \ delay functinality by waiting for a Promise to resolve.
 * @exampleInput: 500
 * @exampleOutput: Promise that resolves in 500 ms
 * @sideEffects: none
 * @hasTests: false
 */
export function wait_for_ms(time: number): Promise<void> {
  // prettier-ignore
  // eslint-disable-next-line promise/avoid-new
  return new Promise((resolve) => setTimeout(resolve, time));
}

export const for_10ms = ():Promise<void> => wait_for_ms(10);
export const for_100ms = ():Promise<void> => wait_for_ms(100);
export const for_500ms = ():Promise<void> => wait_for_ms(500);
export const for_1sec = ():Promise<void> => wait_for_ms(1000);
