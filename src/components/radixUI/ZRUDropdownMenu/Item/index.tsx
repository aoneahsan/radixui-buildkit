// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { DropdownMenu } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import type { ZRUColorE, ZRUShowable } from "@src/types/radixUI";
interface ZRUDropdownMenuItemI extends ZRUShowable {
  children?: React.ReactNode;
  asChild?: boolean;
  style?: Record<string, unknown>;
  className?: string;
  color?: ZRUColorE;
  shortcut?: string;
}
// #endregion

const ZRUDropdownMenuItem: React.FC<ZRUDropdownMenuItemI> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }

  return <DropdownMenu.Item {...props}>{props?.children}</DropdownMenu.Item>;
};

export default ZRUDropdownMenuItem;
