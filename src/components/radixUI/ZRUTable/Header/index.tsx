// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Table } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
interface IZRUTableHeader {
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
}
// #endregion

const ZRUTableHeader: React.FC<IZRUTableHeader> = (props) => {
  return <Table.Header {...props}>{props?.children}</Table.Header>;
};

export default ZRUTableHeader;
