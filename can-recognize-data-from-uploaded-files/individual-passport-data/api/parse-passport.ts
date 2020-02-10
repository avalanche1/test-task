import {parse_gender_from} from "./parse-gender";
import {find_in} from "./find-in-ocr-string-array";
import {parse_dates_from} from "./parse-dates";
import {parse_birth_place_from} from "./parse-birth-place";
import {parse_issuer_name} from "./parse-issuer-name";

import {regexp} from "../regexp";

import {ParsedPassportData} from "../types";

export function parse(recognitionResult: string): ParsedPassportData {
  const RRstrings = recognitionResult.split("\n");
  //todo-3: Can also try tf approach: RRstrings.filter(s=>s.match(/^[А-Я .0-9]*$/u))

  // Spec-start: Распознаются след. поля паспорта:.
  return {
    name: find_in(RRstrings).by(regexp.name, -1),
    surname: find_in(RRstrings).by(regexp.surname, -1),
    patronymic: find_in(RRstrings).by(regexp.patronimyc, -1),
    gender: parse_gender_from(RRstrings),
    birthday: parse_dates_from(RRstrings, "birthday"),
    birthPlace: parse_birth_place_from(RRstrings),
    passportSeries: find_in(RRstrings).by(regexp.passportSeries),
    passportNumber: find_in(RRstrings).by(regexp.passportNumber),
    passportIssuerName: parse_issuer_name(RRstrings),
    passportIssueDate: parse_dates_from(RRstrings, "issue"),
    passportIssuerCode: find_in(RRstrings).by(regexp.passportIssuerCode),
    // passportIssuerCity: "string",
    // _data: RRstrings,
  };
  // Spec-end.
}
