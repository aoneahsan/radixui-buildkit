// #region ---- Core Imports ----
import React, { useMemo } from "react";

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import { ZText } from "@src/components/radixUI";
import { isZNonEmptyString } from "zaions-tool-kit";

// #endregion

// #region ---- Types Imports ----
import { ZRUColorE, ZRUShowable, ZRUTextAsE } from "@src/types";

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----

// #endregion

const ZErrorText: React.FC<
  { message?: string | Array<string> } & ZRUShowable
> = ({ message, show }) => {
  const _isError = useMemo(
    () =>
      Array.isArray(message)
        ? message?.length > 0
        : typeof message === "string"
        ? isZNonEmptyString(message)
        : false,
    [message]
  );
  return (
    <ZText
      show={_isError && show}
      as={ZRUTextAsE.span}
      size="1"
      color={ZRUColorE.tomato}
      className="font-medium"
    >
      {Array.isArray(message) ? message[0] : message}
    </ZText>
  );
};

export default ZErrorText;
