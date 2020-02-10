/* eslint-disable no-console */
import {Env} from "../env";
import {ObjectValuesUnionOf} from "../../types/generic-types";

// Make devprint global for ease of debugging - no need to import explicitly.
// todo-2: all globalThis assignments sd be dome through a helper
globalThis.devprint = devprint;

/**
 * @description: Prints to console in dev environment; accepts optional indents
 * @exampleInput: 'foo', 2
 * @exampleOutput: console.log('  foo')
 * @pure: false: depends on Env, prints to console
 * @hasTests: false
 */
const PrinterTypes = {
  LOG: "LOG",
  WARN: "WARN",
  ERROR: "ERROR",
};
type PrintType = ObjectValuesUnionOf<typeof PrinterTypes>;

export function devprint(
  textToPrint: string,
  relatedObject?: object,
  type?: PrintType,
  indentsNum?: number
): void {
  // todo: uncomment for prod
  // if (!Env.isDev) return undefined;

  const printer = {
    [PrinterTypes.LOG]: console.log,
    [PrinterTypes.WARN]: console.warn,
    [PrinterTypes.ERROR]: console.error,
  };

  if (!type) {
    // eslint-disable-next-line fp/no-mutation,no-param-reassign
    type = PrinterTypes.LOG;
  }

  const tabs = indentsNum ? " ".repeat(indentsNum) : "";
  // const tabs = indentsNum ? "\t".repeat(indentsNum) : ""; // Tabs
  printer[type](tabs + textToPrint, relatedObject || "");
}

/* eslint-disable fp/no-mutation */
devprint.warn = function warn(text: string, obj?: object): void {
  return devprint(text, obj, PrinterTypes.WARN);
};
devprint.error = function error(text: string, obj?: object): void {
  return devprint(text, obj, PrinterTypes.ERROR);
};
/* eslint-enable fp/no-mutation */
