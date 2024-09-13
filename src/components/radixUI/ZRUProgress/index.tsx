// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Progress } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import type { Responsive } from "@radix-ui/themes/dist/cjs/props";
import type {
  ZRUColorE,
  ZRURadiusE,
  ZRUShowable,
  ZRUTriggerVariantE,
} from "@src/types/radixUI";
interface ZRUProgressI extends ZRUShowable {
  className?: string;
  style?: Record<string, unknown>;
  size?: Responsive<"1" | "2" | "3">;
  variant?: ZRUTriggerVariantE;
  color?: ZRUColorE;
  highContrast?: boolean;
  radius?: ZRURadiusE;
  duration?: `${number}s` | `${number}ms`;
  value?: number;
}
// #endregion

/**
 * A customized Radix Progress component.
 */
const ZRUProgress: React.FC<ZRUProgressI> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }
  return <Progress {...props} />;
};

export default ZRUProgress;
