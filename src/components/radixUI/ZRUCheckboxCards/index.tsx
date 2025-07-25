// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { CheckboxCards } from "@radix-ui/themes";

// #endregion

// #region ---- Types Imports ----
import { Responsive } from "@radix-ui/themes/props";
import type { ZRUColorE, ZRUCommonVariantE } from "@src/enums/radixUI";
import { ZRUShowable } from "@src/types";
interface ZRUCheckboxCardsGroupI extends ZRUShowable {
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
  asChild?: boolean;
  size?: Responsive<"1" | "2" | "3">;
  variant?: ZRUCommonVariantE;
  color?: ZRUColorE;
  highContrast?: boolean;
  columns?: Responsive<string>;
  gap?: Responsive<string>;
  defaultValue?: string[];
  value?: string[];
  onChange?: React.FormEventHandler<HTMLDivElement>;
  onValueChange?: (value: string[]) => void;
}
// #endregion

/**
 * A customized Radix Checkbox cards component.
 */
const ZRUCheckboxCardsGroup: React.FC<ZRUCheckboxCardsGroupI> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }

  return <CheckboxCards.Root {...props}>{props?.children}</CheckboxCards.Root>;
};

export default ZRUCheckboxCardsGroup;
