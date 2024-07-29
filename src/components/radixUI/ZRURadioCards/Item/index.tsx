// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { RadioCards } from "@radix-ui/themes";

// #endregion

// #region ---- Types Imports ----
interface ZRURadioCardsItemI {
  value: string;
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
  asChild?: boolean;
}
// #endregion

/**
 * A customized Radix Radio item component.
 */
const ZRURadioCardsItem: React.FC<ZRURadioCardsItemI> = (props) => {
  return <RadioCards.Item {...props}>{props?.children}</RadioCards.Item>;
};

export default ZRURadioCardsItem;
