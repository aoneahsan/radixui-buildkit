// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { SegmentedControl } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
interface IZRUSegmentedControlItem {
  children?: React.ReactNode;
  value: string;
  className?: string;
}
// #endregion

const ZRUSegmentedControlItem: React.FC<IZRUSegmentedControlItem> = (props) => {
  return (
    <SegmentedControl.Item {...props}>{props?.children}</SegmentedControl.Item>
  );
};

export default ZRUSegmentedControlItem;
