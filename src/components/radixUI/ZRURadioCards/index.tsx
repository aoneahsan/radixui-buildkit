// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { RadioCards } from "@radix-ui/themes";

// #endregion

// #region ---- Types Imports ----
import type { ZRURadioCardsGroupI } from "@src/types";

// #endregion

/**
 * A customized Radix Radio cards component.
 */
const ZRURadioCardsGroup: React.FC<ZRURadioCardsGroupI> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }

  return (
    <RadioCards.Root {...props} value={props?.value ?? ""}>
      {props?.children}
    </RadioCards.Root>
  );
};

export default ZRURadioCardsGroup;
