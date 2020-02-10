/* eslint-env webextensions */
import "chrome-extension-async";

import Tab = chrome.tabs.Tab;

/**
 * @description: Gets active tab id.
 * @exampleInput:
 * @exampleOutput: 23
 * @sideEffects: browser API
 * @hasTests: false
 */
export async function get_active_tab_id(
  initiatorName: string
): Promise<number | undefined> {
  const tabs: ReadonlyArray<Tab> = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });
  const [activeTab] = tabs;

  if (!activeTab.id) {
    // eslint-disable-next-line no-console
    console.error(`${initiatorName}: could not get active tab id`);
    return undefined;
  }

  return activeTab.id;
}
