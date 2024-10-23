// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import { ZRUAlignE, ZRUColorE } from "@enums/radixUI";
import { ZFlex, ZText } from "@src/components/radixUI";
import { ZRUShowable } from "@src/types";

// #endregion

// #region ---- Images Imports ----
import { ZCoinDollarOutlineIcon } from "@src/assets";

// #endregion

interface IZAmount extends ZRUShowable {
  children: React.ReactNode;
}

const ZAmount: React.FC<IZAmount> = ({ children, show }) => {
  return (
    <ZFlex align={ZRUAlignE.center} gap="1" show={show}>
      <ZText color={ZRUColorE.amber}>
        <ZCoinDollarOutlineIcon className="w-5 h-5" />
      </ZText>
      {children}
    </ZFlex>
  );
};

export default ZAmount;
