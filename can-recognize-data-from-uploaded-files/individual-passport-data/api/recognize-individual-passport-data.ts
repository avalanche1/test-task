import {devprint} from "../../../utility-belt/helpers/debug/devprint";

import {parse} from "./parse-passport";
import {REST} from "../../../utility-belt/helpers/http/REST";
import {read_file_as_data_url} from "../../../utility-belt/helpers/file/read-file";
import {OCRservice} from "../ocr-service-config";

import regexp from "../../../utility-belt/helpers/regexp";
import {RETURN_STATUS} from "../dict";

import {RecognitionResultFailure, RecognitionResultSucces} from "../types";
import {NonEmptyObject} from "../../../utility-belt/types/generic-types";

export async function individual_passport_data_from(
  file: File
): Promise<RecognitionResultSucces | RecognitionResultFailure> {
  // Spec-start: Ограничение по формату файлов: изображения.
  if (!file.type.match(regexp.fileType.image)) {
    const error =
      `recognize.${this.name}(): recieved incorrect file type.\n` +
      `Expected image/* - got: ${file.type}`;
    devprint.error(error);
    return {status: RETURN_STATUS.ERROR};
  }
  // Spec-end.

  // Explain: Destructuring. not really readable here.
  // eslint-disable-next-line prefer-destructuring
  const base64String = (await read_file_as_data_url(file)).split(",")[1];

  const OCRserviceResponse = (await REST.post_json({
    url: OCRservice.create_URL(),
    payload: OCRservice.create_payload(base64String),
  })) as NonEmptyObject;

  if (OCRserviceResponse.error) return {status: RETURN_STATUS.ERROR};

  const recognitionResult =
    OCRserviceResponse.responses[0].textAnnotations[0].description;
  devprint("OCRserviceResponse", recognitionResult.split("\n"));

  const parsedData = parse(recognitionResult);
  devprint("parsedData", parsedData);

  const resultStatus = Object.values(parsedData).some((value) => value === undefined)
    ? RETURN_STATUS.PARTIAL
    : RETURN_STATUS.SUCCESS;

  return {status: resultStatus, data: parsedData};
}
