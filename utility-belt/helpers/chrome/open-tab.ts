/* eslint-env webextensions */

/**
 * @description: Opens new tab with a given URL
 * @exampleInput: 'alkatsa.com'
 * @exampleOutput: void
 * @sideEffects: browser API
 * @hasTests: false
 */
export function open_tab(url: string): void {
  return chrome.tabs.create({url});
}
