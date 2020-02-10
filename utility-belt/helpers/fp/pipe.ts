import {devprint} from "../debug/devprint";

import {GenericFn} from "../../types/generic-types";

type PipeFn = {readonly thru: GenericFn; readonly fold: GenericFn};
export function pipe(valueBeingPiped: unknown, printInterimResults?: true): PipeFn {
  return {
    // eslint-disable-next-line fp/no-rest-parameters,functional/functional-parameters
    thru(...functionsToApplyOnValue: ReadonlyArray<GenericFn>) {
      // let interimResult = functionsToApplyOnValue[0](valueBeingPiped);
      // eslint-disable-next-line fp/no-let,functional/no-let
      let interimResult = "";
      if (printInterimResults) {
        devprint(interimResult);
      }
      functionsToApplyOnValue.forEach((fn, idx) => {
        // Array.isArray([])
        // To fold return values we have to get 1st interim result first
        if (idx === 0) {
          interimResult = fn(valueBeingPiped);
        }
        // if (idx === 0) {return void 0;}
        interimResult = pipe(fn(interimResult)).fold();
      });
      return interimResult;
    },
    //хер его знает, че он делает, но без него '.thru' не пашет...
    fold() {
      return valueBeingPiped;
    },
  };
}
