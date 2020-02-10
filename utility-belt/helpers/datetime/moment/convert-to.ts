import moment from "moment";
import is from "is_js";

import {has_RU_datestring_format} from "../../regexp/date";

import {dateStringFormat} from "../date-string-formats";

import {Moment} from "../../../types/lib-types";

export const convert_to_Moment_if_is = {
  date_string: date_string_to_Moment,
  Date: Date_to_Moment,
};

/**
 * @description: Converts date string to Moment obj.
 * @exampleInput:  "01.01.2020"     | {Moment}
 * @exampleOutput: "foo" | "foo"
 * @sideEffects: none
 * @hasTests: false
 */
function date_string_to_Moment<T>(dateString: string | T): Moment | string | T {
  if (!is.string(dateString)) return dateString as T;
  if (!has_RU_datestring_format(dateString as string)) return dateString as string;

  return moment(dateString, dateStringFormat.RU);
}

/**
 * @description: Converts Date obj to Moment obj.
 * @exampleInput:  {Date}     | {Moment}
 * @exampleOutput: 123 | 123
 * @sideEffects: none
 * @hasTests: false
 */
function Date_to_Moment<T>(dateObj: Date | T): Moment | T {
  if (!(dateObj instanceof Date)) return dateObj as T;

  return moment(dateObj);
}
