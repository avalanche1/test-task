/**
 * @description: .
 * @exampleInput:
 * @exampleOutput:
 * @sideEffects:
 * @hasTests:
 */
export function convert_numberLike_to_currency(
  numberLike: number | string,
  locale: string
): string {
  // "1fd2 300,8c9" ==> "12300.89"
  // prettier-ignore
  const numberLikeWithDotSeparator
      = typeof numberLike === "string"
      ? numberLike.replace(/,/gu, ".").replace(/[^0-9.]+|\s+/gimu, "")
      : numberLike;

  const parsedValue = isNaN(parseFloat(numberLikeWithDotSeparator as string))
    ? ""
    : parseFloat(numberLikeWithDotSeparator as string);

  const decimals = 2;

  return parsedValue.toLocaleString(locale, {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });
  // TODO: indicate whether function is pure and has tests; delete this line
}

export function convert_numberLike_to_RUB(numberLike: number | string): string {
  return convert_numberLike_to_currency(numberLike, "ru");
}
