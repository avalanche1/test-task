import React from "react";
import {render} from "react-dom";

// import {App} from "./App";
import {App} from "./App";

render(<App />, document.getElementById("App"));

// Remove styles centering the 'Loading..' word in index.html
["display", "height", "align-items"].forEach(
  // Aux: Cast to any, otherwise sh*t happens - https://stackoverflow.com/questions/53526178/element-implicitly-has-an-any-type-because-index-expression-is-not-of-type-nu
  // eslint-disable-next-line no-return-assign,@typescript-eslint/no-explicit-any,functional/immutable-data
  (prop) => ((document.querySelector("#App") as any).style[prop] = "")
);

// import * as serviceWorker from "./serviceWorker";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
