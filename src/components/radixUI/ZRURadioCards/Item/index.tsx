// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { RadioCards } from "@radix-ui/themes";

// #endregion

// #region ---- Types Imports ----
import { ZRURadioCardsItemI } from "@src/types";

// #endregion

/**
 * A customized Radix Radio item component.
 */
const ZRURadioCardsItem: React.FC<ZRURadioCardsItemI> = (props) => {
  return <RadioCards.Item {...props}>{props?.children}</RadioCards.Item>;
};

export default ZRURadioCardsItem;
