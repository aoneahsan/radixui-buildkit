// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Container } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import { Responsive } from "@radix-ui/themes/props";
import type {
  ZRUContainerDisplayE,
  ZRUGeneralAlignE,
} from "@src/enums/radixUI";
import type { ZRUShowable, ZRUSizeT, ZRUStyleI } from "@src/types";
interface ZRUContainerI extends ZRUStyleI, ZRUShowable {
  children?: React.ReactNode;
  asChild?: boolean;
  className?: string;
  style?: Record<string, unknown>;
  size?: Responsive<ZRUSizeT>;
  display?: Responsive<ZRUContainerDisplayE>;
  align?: Responsive<ZRUGeneralAlignE>;
}
// #endregion

const ZRUContainer: React.FC<ZRUContainerI> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }

  return <Container {...props}>{props?.children}</Container>;
};

export default ZRUContainer;
