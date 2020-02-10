// eslint-disable-next-line fp/no-rest-parameters
export type GenericFn = (...arg: any[]) => any;

export type GenericObject = NonEmptyObject | object;
export type NonEmptyObject = {[key: string]: unknown};
export type NonEmptyStringObject = {[key: string]: string};

// Use: ObjectValuesUnionOf<typeof someObject>.
export type ObjectValuesUnionOf<T> = T[keyof T];

export type SelectElementEntry = Readonly<{value: string; text: string}>;
