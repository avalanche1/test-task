import {RETURN_STATUS} from "./dict";

export type RecognitionResultSucces = {
  data: ParsedPassportData;
  status: typeof RETURN_STATUS["SUCCESS" | "PARTIAL"];
};
export type RecognitionResultFailure = {
  status: typeof RETURN_STATUS["ERROR" | "FAILURE"];
};

export type ParsedPassportData = Readonly<{
  name: string | undefined;
  surname: string | undefined;
  patronymic: string | undefined;
  gender: "M" | "F" | undefined;
  birthday: Date | undefined;
  birthPlace: string | undefined;
  passportSeries: string | undefined;
  passportNumber: string | undefined;
  passportIssuerName: string | undefined;
  passportIssueDate: Date | undefined;
  passportIssuerCode: string | undefined;
  // passportIssuerCity: string | undefined;
}>;
