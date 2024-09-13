// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { CheckboxCards } from "@radix-ui/themes";
// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import type { ZRUShowable } from "@src/types";

interface ZRUCheckboxCardsItemI extends ZRUShowable {
  value: string;
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
  asChild?: boolean;
}
// #endregion

/**
 * A customized Radix Checkbox item component.
 */
const ZRUCheckboxCardsItem: React.FC<ZRUCheckboxCardsItemI> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }

  return <CheckboxCards.Item {...props}>{props?.children}</CheckboxCards.Item>;
};

export default ZRUCheckboxCardsItem;
