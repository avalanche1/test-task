/* eslint-env webextensions */
import "chrome-extension-async";
// https://github.com/KeithHenry/chromeExtensionAsync/issues/5#issuecomment-416648327
// import "../../../node_modules/chrome-extension-async/chrome-extension-async.js";

/**
 * @description: Saves an object using Chrome Storage API.
 * @exampleInput: {foo: 'bar'}
 * @exampleOutput: undefined
 * @sideEffects: browser API
 * @hasTests: false
 */
export async function set_chrome_storage_item(item: object): Promise<void> {
  await chrome.storage.local.set(item);
  return undefined;
}

/**
 * @description: Gets an object's value from Chrome Storage.
 * @exampleInput: {'foo'}
 * @exampleOutput: 'bar'
 * @sideEffects: browser API
 * @hasTests: false
 */
export async function get_chrome_storage_item_value(itemKey: string): Promise<any> {
  const itemObject = await chrome.storage.local.get(itemKey);
  return itemObject[itemKey];
}

// For debugging.
/*
(async function foo() {
  await set_chrome_storage_item({foo: 'bar'});

  const foo_value = await get_chrome_storage_item_value("foo");
  console.log(foo_value);
})();
*/
