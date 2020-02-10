import {get_last_item_of} from "../../../utility-belt/helpers/array/get-last-item";
import {find_in} from "./find-in-ocr-string-array";

import {regexp} from "../regexp";

export function parse_birth_place_from(
  strArr: ReadonlyArray<string>
): string | undefined {
  // We are pattern matching "ГОРОД МОСКВА" in:
  // ["МУЖ. Дата", "рождения", "Место", "ГОРОД МОСКВА", "рождения"];

  // "ГОРОД МОСКВА"
  const stringFoundFromStart = find_in(strArr).by(regexp.birthPlace.start, 1);

  const birthPlaceEndItemPositions: ReadonlyArray<number> = strArr
    // [undefined, undefined, 2, undefined, 4]
    .map((string, idx) => (string.match(regexp.birthPlace.end) ? idx : undefined))
    // todo-4: TS sdnt ignore .filter(Boolean) - but it does (if you uncomment it). file an issue.
    // .filter(Boolean);
    // [2, 4]
    .filter(Boolean) as ReadonlyArray<number>;
  const lastItemPosition = get_last_item_of(birthPlaceEndItemPositions) as number;

  // strArr[lastItemPosition] = 2nd "рождения" in array depicted above.
  // Should be "ГОРОД МОСКВА"
  const stringFoundFromEnd = strArr[lastItemPosition - 1];

  return stringFoundFromStart === stringFoundFromEnd ? stringFoundFromStart : undefined;
}
