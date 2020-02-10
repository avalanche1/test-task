export const OCRservice = {
  create_payload(base64String: string) {
    return {
      requests: [
        {
          features: [
            {
              type: "TEXT_DETECTION",
            },
          ],
          imageContext: {
            languageHints: "ru",
          },
          image: {
            content: base64String,
          },
        },
      ],
    };
  },
  create_URL() {
    const queryParams = "?key=askTheGuyThatGaveYouTheTask:)";
    return `https://vision.googleapis.com/v1/images:annotate${queryParams}`;
  },
} as const;
