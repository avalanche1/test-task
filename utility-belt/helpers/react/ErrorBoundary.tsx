/* eslint-disable fp/no-class,fp/no-this,fp/no-mutation */
import React from "react";

import pick_random_NP_from from "../array/pick-random";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({hasError: true});
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    return void 0;
  }

  // noinspection FunctionWithMultipleReturnPointsJS
  render() {
    if (this.state.hasError) {
      const errorTypes = [
        "Разрушительнейший",
        "Ужасающий",
        "Невероятный",
        "Поливалентный",
        "Биполярный",
        "Орбитальный",
        "Межгалактический",
      ];
      // You can render any custom fallback UI
      return (
        <h3 style={{color: "orange"}}>
          {`Произошёл ${pick_random_NP_from(errorTypes)}`} сбой! Срочно сообщите в службу
          поддержки.
        </h3>
      );
    }
    return this.props.children;
  }
}
