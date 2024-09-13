// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { AspectRatio } from "@radix-ui/themes";

// #endregion

// #region ---- Types Imports ----
import type { ZRUAspectRatioI } from "@src/types";

// #endregion

const ZRUAspectRatio: React.FC<ZRUAspectRatioI> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }
  return <AspectRatio {...props}>{props.children}</AspectRatio>;
};

export default ZRUAspectRatio;
