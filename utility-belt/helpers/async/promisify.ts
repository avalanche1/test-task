// https://www.npmjs.com/package/pify
import pify from "pify";

/**
 * @description: Transforms a fn requiring a callback into a Promise.
 * @exampleInput: fs.readFile
 * @exampleOutput: Promise
 * @sideEffects: none
 * @hasTests: false
 */
export const promisify = pify;
