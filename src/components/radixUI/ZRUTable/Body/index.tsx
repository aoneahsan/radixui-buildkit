// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { Table } from "@radix-ui/themes";

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
interface IZRUTableBody {
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
}
// #endregion

const ZRUTableBody: React.FC<IZRUTableBody> = (props) => {
  return <Table.Body {...props}>{props?.children}</Table.Body>;
};

export default ZRUTableBody;
