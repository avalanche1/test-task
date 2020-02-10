// https://medium.com/hackernoon/rethinking-javascript-eliminate-the-switch-statement-for-better-code-5c81c044716d

const executeIfFunction = (f) => (typeof f === "function" ? f() : f);

export const select = (cases) => (defaultCase) => (lookupValue) =>
  cases.hasOwnProperty(lookupValue) ? cases[lookupValue] : defaultCase;

export const selectF = (cases) => (defaultCase) => (lookupValue) =>
  executeIfFunction(select(cases)(defaultCase)(lookupValue));
