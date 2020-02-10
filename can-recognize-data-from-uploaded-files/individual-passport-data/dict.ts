import {ObjectValuesUnionOf} from "../../utility-belt/types/generic-types";

export const RETURN_STATUS = {
  ERROR: "ERROR",
  FAILURE: "FAILURE",
  PARTIAL: "PARTIAL",
  SUCCESS: "SUCCESS",
};
export type ReturnStatus = ObjectValuesUnionOf<typeof RETURN_STATUS>;
