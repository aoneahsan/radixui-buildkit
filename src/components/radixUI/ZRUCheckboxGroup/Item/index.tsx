// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import { CheckboxGroup } from "@radix-ui/themes";

// #endregion

// #region ---- Types Imports ----
import type { ZRUShowable } from "@src/types";
interface ZRUCheckboxItemI extends ZRUShowable {
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
  asChild?: boolean;
  value: string;
}
// #endregion

/**
 * A customized Radix CheckboxItem component.
 */
const ZRUCheckboxItem: React.FC<ZRUCheckboxItemI> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }

  return <CheckboxGroup.Item {...props}>{props?.children}</CheckboxGroup.Item>;
};

export default ZRUCheckboxItem;
