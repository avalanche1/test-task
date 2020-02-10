// Explain: Because we use obj method shorthands instead of fns - we cannot insert an empty line bw them.
/* eslint-disable lines-around-comment */

export const DOM = {
  /**
   * @description: Equivalent to document.body.querySelector.
   * @exampleInput:  "#left-tab1 > form > fieldset:nth-child(2)"
   * @exampleOutput: <input>
   * @sideEffects: DOM traversal
   * @hasTests: no
   */
  get_el(selector: string): HTMLElement | null {
    return document.body.querySelector(selector);
  },
  /**
   * @description: Checks if page has a given text string.
   * @exampleInput:  "foo"
   * @exampleOutput: true
   * @sideEffects: DOM traversal
   * @hasTests: no
   */
  includes_text(text: string): boolean {
    return document.body.innerText.includes(text);
  },
};
