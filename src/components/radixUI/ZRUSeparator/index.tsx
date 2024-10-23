// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Separator } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import { type Responsive } from "@radix-ui/themes/dist/cjs/props";
import { type ZRUColorE, type ZRUOrientationE } from "@src/enums/radixUI";
interface ZRUSeparatorI {
  className?: string;
  style?: Record<string, unknown>;
  orientation?: Responsive<ZRUOrientationE>;
  size?: Responsive<"1" | "2" | "3" | "4">;
  color?: ZRUColorE;
  decorative?: boolean;
}
// #endregion

/**
 * A customized Radix Separator component.
 */
const ZRUSeparator: React.FC<ZRUSeparatorI> = (props) => {
  return <Separator {...props} />;
};

export default ZRUSeparator;
