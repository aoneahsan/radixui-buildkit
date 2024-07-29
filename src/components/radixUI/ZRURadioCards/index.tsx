// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { RadioCards } from "@radix-ui/themes";

// #endregion

// #region ---- Types Imports ----
import type { Responsive } from "@radix-ui/themes/dist/cjs/props";
import type { ZRUColorE, ZRUCommonVariantE } from "@src/types";
interface ZRURadioCardsGroupI {
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
  defaultValue?: string;
  value?: string;
  onChange?: React.FormEventHandler<HTMLDivElement>;
  onValueChange?: (value: string) => void;
}
// #endregion

/**
 * A customized Radix Radio cards component.
 */
const ZRURadioCardsGroup: React.FC<ZRURadioCardsGroupI> = (props) => {
  return <RadioCards.Root {...props}>{props?.children}</RadioCards.Root>;
};

export default ZRURadioCardsGroup;
