export function find_in(
  strArr: ReadonlyArray<string>
): {by: (regex: RegExp, offset?: number) => string | undefined} {
  return {
    by(regex: RegExp, offset?: number): string | undefined {
      if (!offset) {
        const strContainingRegex = strArr.find((string) => string.match(regex));
        if (!strContainingRegex) return undefined;

        const [searchValue] = strContainingRegex.match(regex) as RegExpMatchArray;
        return searchValue;
      }

      const baseItemPosition = strArr.findIndex((string) => string.match(regex));
      const itemToReturnPosition = baseItemPosition + offset;
      if (itemToReturnPosition < 0) return undefined;

      return strArr[itemToReturnPosition];
    },
  };
}
