// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Badge } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import { Responsive } from "@radix-ui/themes/props";
import {
  type ZRUBadgeVariantE,
  type ZRUColorE,
  type ZRURadiusE,
} from "@src/enums/radixUI";
import { type ZRUShowable } from "@src/types";
interface ZRUBadgeI extends ZRUShowable {
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
  asChild?: boolean;
  size?: Responsive<"1" | "2" | "3">;
  variant?: ZRUBadgeVariantE;
  color?: ZRUColorE;
  highContrast?: boolean;
  radius?: ZRURadiusE;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}
// #endregion

/**
 * A customized Radix Badge component.
 */
const ZRUBadge: React.FC<ZRUBadgeI> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }
  return <Badge {...props}>{props?.children}</Badge>;
};

export default ZRUBadge;
