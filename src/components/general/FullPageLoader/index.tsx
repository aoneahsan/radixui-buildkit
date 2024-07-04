import React from "react";
import "./styles.css";
import ZRUFlex from "../../radixUI/ZRUFlex";
import { ZRUAlignE, ZRUJustifyE } from "@src/types";
import ZRUSpinner from "../../radixUI/ZRUSpinner";

const FullPageLoader: React.FC = () => {
  return (
    <ZRUFlex
      justify={ZRUJustifyE.center}
      align={ZRUAlignE.center}
      height="100%"
      minHeight="100vh"
    >
      <ZRUSpinner className="spinner" size="3" />
    </ZRUFlex>
  );
};
export default FullPageLoader;
