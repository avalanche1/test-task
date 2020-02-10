import {find_in} from "./find-in-ocr-string-array";

import {regexp} from "../regexp";

export function parse_issuer_name(strArr: ReadonlyArray<string>): string | undefined {
  const attempt =
    // Explain: Template string looks unreadable here.
    // eslint-disable-next-line prefer-template
    find_in(strArr).by(regexp.passportIssuerName, -1) +
    " " +
    find_in(strArr).by(regexp.passportIssuerName, 1);
  return attempt.includes("undefined") ? undefined : attempt;
}
