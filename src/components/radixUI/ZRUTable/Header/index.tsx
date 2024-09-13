// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Table } from "@radix-ui/themes";
import { ZRUShowable } from "@src/types";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
interface IZRUTableHeader extends ZRUShowable {
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
}
// #endregion

const ZRUTableHeader: React.FC<IZRUTableHeader> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }

  return <Table.Header {...props}>{props?.children}</Table.Header>;
};

export default ZRUTableHeader;
