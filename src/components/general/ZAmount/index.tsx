// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import { ZFlex, ZText } from "@src/components/radixUI";
import { ZRUAlignE, ZRUColorE } from "@src/types";

// #endregion

// #region ---- Images Imports ----
import { ZCoinDollarOutlineIcon } from "@src/assets";

// #endregion

const ZAmount: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ZFlex align={ZRUAlignE.center} gap="1">
      <ZText color={ZRUColorE.amber}>
        <ZCoinDollarOutlineIcon className="w-5 h-5" />
      </ZText>
      {children}
    </ZFlex>
  );
};

export default ZAmount;
