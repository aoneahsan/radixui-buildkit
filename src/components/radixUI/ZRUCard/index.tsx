// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Card } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import { Responsive } from "@radix-ui/themes/dist/cjs/props";
import type { ZRUBasicVariantE } from "@src/enums/radixUI";
import { ZRUShowable } from "@src/types";
interface ZRUCardI extends ZRUShowable {
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
  asChild?: boolean;
  size?: Responsive<"1" | "2" | "3" | "4" | "5">;
  variant?: ZRUBasicVariantE;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
// #endregion

/**
 * A customized Radix Card component.
 */
const ZRUCard: React.FC<ZRUCardI> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }
  return <Card {...props}>{props?.children}</Card>;
};

export default ZRUCard;
