// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Heading } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import type { Responsive } from "@radix-ui/themes/dist/cjs/props";
import type {
  ZRUColorE,
  ZRUGeneralAlignE,
  ZRUHeadingAsE,
  ZRUMarginI,
  ZRUShowable,
  ZRUStyleI,
  ZRUTextSizeT,
  ZRUTrimE,
  ZRUWeightE,
  ZRUWrapE,
} from "@src/types/radixUI";
interface ZRUHeadingI extends ZRUStyleI, ZRUMarginI, ZRUShowable {
  children?: React.ReactNode;
  asChild?: boolean;
  className?: string;
  style?: Record<string, unknown>;
  as?: ZRUHeadingAsE;
  size?: Responsive<ZRUTextSizeT>;
  weight?: Responsive<ZRUWeightE>;
  align?: Responsive<ZRUGeneralAlignE>;
  trim?: Responsive<ZRUTrimE>;
  truncate?: boolean;
  wrap?: Responsive<ZRUWrapE>;
  color?: ZRUColorE;
  highContrast?: boolean;
}
// #endregion

const ZRUHeading: React.FC<ZRUHeadingI> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }

  return <Heading {...props}>{props?.children}</Heading>;
};

export default ZRUHeading;
