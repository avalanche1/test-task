import React from "react";
import {Env} from "../env";

/**
 * @description: Wraps React functional component with a lib that checks for unnecessary re-renders.
 * @exampleInput: <React functional component>
 * @exampleOutput: void
 * @sideEffects: none
 * @hasTests: false
 */
declare interface IRerenderCheckingComponent extends React.FunctionComponent {
  whyDidYouRender?: true;
}
export function check_for_excessive_rerenders(
  react_func_component: (args: any) => JSX.Element
): void {
  if (Env.isDev) {
    // eslint-disable-next-line fp/no-mutation,no-param-reassign
    (react_func_component as IRerenderCheckingComponent).whyDidYouRender = true;
  }
}
