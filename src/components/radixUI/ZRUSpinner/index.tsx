// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Spinner } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
import { Responsive } from "@radix-ui/themes/props";
interface ZRUSpinnerI {
  asChild?: boolean;
  className?: string;
  style?: Record<string, unknown>;
  size?: Responsive<"1" | "2" | "3">;
  loading?: boolean;
}
// #endregion

const ZRUSpinner: React.FC<ZRUSpinnerI> = (props) => {
  return <Spinner {...props} />;
};

export default ZRUSpinner;
