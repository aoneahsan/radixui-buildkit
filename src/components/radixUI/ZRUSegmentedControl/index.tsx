// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { SegmentedControl } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import type { ZRUCommonVariantE, ZRURadiusE } from "@enums/radixUI";
import type { Responsive } from "@radix-ui/themes/dist/cjs/props";
interface IZRUSegmentedControl {
  children?: React.ReactNode;
  size?: Responsive<"1" | "2" | "3">;
  radius?: ZRURadiusE;
  variant?: ZRUCommonVariantE;
  value?: string;
  defaultValue?: string;
  className?: string;
  onValueChange?(value: string): void;
}
// #endregion

const ZRUSegmentedControl: React.FC<IZRUSegmentedControl> = (props) => {
  return (
    <SegmentedControl.Root {...props}>{props?.children}</SegmentedControl.Root>
  );
};

export default ZRUSegmentedControl;
