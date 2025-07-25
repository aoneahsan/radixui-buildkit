// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { TextField } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import type { Responsive } from "@radix-ui/themes/props";
import type { ZRUColorE, ZRUSideE } from "@src/enums/radixUI";
import { ZRUShowable } from "@src/types";
interface ZRUInputSlotI extends ZRUShowable {
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
  side?: ZRUSideE;
  color?: ZRUColorE;
  gap?: Responsive<string>;
  px?: Responsive<string>;
  pl?: Responsive<string>;
  pr?: Responsive<string>;
}

// #endregion

/**
 * A customized Radix Input slot component.
 */
const ZRUInputSlot: React.FC<ZRUInputSlotI> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }

  return <TextField.Slot {...props}>{props?.children}</TextField.Slot>;
};

export default ZRUInputSlot;
