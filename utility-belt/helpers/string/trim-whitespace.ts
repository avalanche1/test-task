import {nonSingleWhitespace} from "../regexp/string";

/**
 * @description: Removes all whitespace longer than one inside string and trims start and end.
 * @exampleInput: " foo   is not   bar   "
 * @exampleOutput: "foo is not bar"
 * @sideEffects: none
 * @hasTests: false
 */
export function trim_whitespace_from(string: string): string {
  return string.replace(nonSingleWhitespace, " ").trim();
}
export const trim_whitespace = trim_whitespace_from;
