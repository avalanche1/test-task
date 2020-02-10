/* eslint-env node */
/* eslint-disable no-process-env */

import {NonEmptyObject} from "../../types/generic-types";

const isProd = process.env.NODE_ENV === "production";

export const Env = {
  isProd,
  isDev: !isProd,
  isPlugin: process.env.PRODUCT_TYPE === "plugin",
  isWebApp: process.env.PRODUCT_TYPE === "webapp",
  // isClient: Meteor.isClient,
  // isServer: Meteor.isServer,
};

// if (Env.isDev) {
// eslint-disable-next-line fp/no-mutation
(globalThis as NonEmptyObject).Env = Env;
// }
