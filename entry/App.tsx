import React from "react";
import {Upload} from "antd";

import {recognize} from "../can-recognize-data-from-uploaded-files";

export function App(): JSX.Element {
  return (
    <Upload.Dragger
      // Spec: Ограничение на загружаемые типы файлов: изображения.
      accept={"image/*"}
      customRequest={async (uploadData: {file: File} /*files: ReadonlyArray<File>*/) => {
        // Explain: keep for when we need to do real server upload.
        // const unsupportedUploadStatus = file.status !== "uploading";
        // if (unsupportedUploadStatus) return;
        const recognitionResult = await recognize.individual_passport_data_from(
          uploadData.file
        );

        console.log(recognitionResult);
      }}
    >
      <p>
        Для распознавания паспортных данных - выберите файл или перетащите сюда <br />
        снимок первой страницы паспорта
      </p>
    </Upload.Dragger>
  );
}
