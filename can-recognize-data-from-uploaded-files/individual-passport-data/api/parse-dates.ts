import {convert_RU_datestirng_to_Date_acceptable_string} from "../../../utility-belt/helpers/datetime/parse";
import {no} from "../../../utility-belt/helpers/array/has-contents";

import {RU_date} from "../../../utility-belt/helpers/regexp/date";

export function parse_dates_from(
  strArr: ReadonlyArray<string>,
  type: "birthday" | "issue"
): Date | undefined {
  const dates: ReadonlyArray<number> = get_dates_from(strArr)
    .map(convert_RU_datestirng_to_Date_acceptable_string)
    .map((dateString) => new Date(dateString).getTime());
  const expectedDateCount = 2;
  if (no(dates) || dates.length < expectedDateCount) return undefined;

  return type === "birthday"
    ? new Date(Math.min(...dates))
    : new Date(Math.max(...dates));
}

function get_dates_from(strArr: ReadonlyArray<string>): ReadonlyArray<string> {
  return strArr.filter((string) => string.match(RU_date));
}
