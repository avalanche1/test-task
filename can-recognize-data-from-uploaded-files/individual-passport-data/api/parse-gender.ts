import {find_in} from "./find-in-ocr-string-array";

import {regexp} from "../regexp";

export function parse_gender_from(strArr: ReadonlyArray<string>): "M" | "F" | undefined {
  // todo-5: Which one looks better? Le'ts make a poll!
  // if (find_in(strArr).by(regexp.genderM)) return "M";
  // if (find_in(strArr).by(regexp.genderF)) return "F";
  //
  // return undefined;

  // prettier-ignore
  return  find_in(strArr).by(regexp.genderM) ? "M"
        : find_in(strArr).by(regexp.genderF) ? "F"
                                            : undefined;
}
