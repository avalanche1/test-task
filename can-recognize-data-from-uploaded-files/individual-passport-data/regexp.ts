export const regexp = {
  name: /имя/iu,
  surname: /фамилия/iu,
  patronimyc: /отчество/iu,
  genderM: /муж./iu,
  genderF: /жен./iu,
  // birthday: RU_date,
  birthPlace: {
    start: /место/iu,
    end: /рождения/iu,
  },
  passportSeries: /\d{2} \d{2}/u,
  passportNumber: /\d{6}/u,
  passportIssuerName: /Паспорт выдан/iu,
  // passportIssueDate: RU_date,
  passportIssuerCode: /\d{3}-\d{3}/u,
  // passportIssuerCity: "string",
};
