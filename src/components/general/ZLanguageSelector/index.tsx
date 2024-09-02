// #region ---- Core Imports ----
import React, { useMemo } from "react";

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----
import { ZSelect } from "@src/components/radixUI";

// #endregion

// #region ---- Types Imports ----

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----

// #endregion

const ZLanguageSelector: React.FC<{ show?: boolean }> = ({ show = true }) => {
  const languageOptions = useMemo(
    () => [
      { value: "english", label: "English", shortForm: "En" },
      { value: "spanish", label: "Spanish", shortForm: "Sp" },
    ],
    []
  );

  return (
    <ZSelect
      show={show}
      options={languageOptions}
      value={languageOptions[0].value}
      size="3"
    />
  );
};

export default ZLanguageSelector;
