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
interface IZRUTableBody extends ZRUShowable {
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
}
// #endregion

const ZRUTableBody: React.FC<IZRUTableBody> = (props) => {
  // Return null if show is false
  if (props?.show === false) {
    return null;
  }

  return <Table.Body {...props}>{props?.children}</Table.Body>;
};

export default ZRUTableBody;
