// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import { ZInput, ZInputSlot } from "@src/components/radixUI";
import { ZRUColorE, ZRUInputI, ZRUInputTypeE } from "@src/types";

// #endregion

// #region ---- Images Imports ----
import { ZCoinDollarOutlineIcon } from "@src/assets";

// #endregion

const ZAmountInput: React.FC<ZRUInputI> = (props) => {
  return (
    <ZInput
      {...props}
      label={props?.label ?? "Amount"}
      type={ZRUInputTypeE.number}
    >
      <ZInputSlot color={ZRUColorE.amber}>
        <ZCoinDollarOutlineIcon className="w-5 h-5" />
      </ZInputSlot>
    </ZInput>
  );
};

export default ZAmountInput;
