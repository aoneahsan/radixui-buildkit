// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Dialog } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import type { ZRUShowable } from "@src/types";
interface ZRUDialogCloseI extends ZRUShowable {
  children?: React.ReactNode;
  disabled?: boolean;
}
// #endregion

/**
 * A customized Radix Dialog Close component.
 */
const ZRUDialogClose: React.FC<ZRUDialogCloseI> = ({
  children,
  disabled,
  show = true,
}) => {
  // Return null if show is false
  if (show === false) {
    return null;
  }
  return <Dialog.Close disabled={disabled}>{children}</Dialog.Close>;
};

export default ZRUDialogClose;
