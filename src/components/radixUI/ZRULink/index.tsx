// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Link } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import { type Responsive } from "@radix-ui/themes/dist/cjs/props";
import {
  ZRUShowable,
  type ZRUColorE,
  type ZRULinkWeightE,
  type ZRUMarginI,
  type ZRUTrimE,
  type ZRUUnderlineLinkE,
  type ZRUWrapLinkE,
} from "@src/types/radixUI";
interface ZRULinkI extends ZRUMarginI, ZRUShowable {
  children?: React.ReactNode;
  asChild?: boolean;
  className?: string;
  style?: Record<string, unknown>;
  size?: Responsive<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">;
  weight?: Responsive<ZRULinkWeightE>;
  trim?: Responsive<ZRUTrimE>;
  truncate?: boolean;
  wrap?: Responsive<ZRUWrapLinkE>;
  underline?: ZRUUnderlineLinkE;
  color?: ZRUColorE;
  highContrast?: boolean;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
// #endregion

const ZRULink: React.FC<ZRULinkI> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }
  return <Link {...props}>{props?.children}</Link>;
};

export default ZRULink;
