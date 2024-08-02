// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { AspectRatio } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
interface ZRUAspectRatioI {
  ratio?: number;
  className?: string;
  children?: React.ReactNode;
}
// #endregion

const ZRUAspectRatio: React.FC<ZRUAspectRatioI> = (props) => {
  return <AspectRatio {...props}>{props.children}</AspectRatio>;
};

export default ZRUAspectRatio;
