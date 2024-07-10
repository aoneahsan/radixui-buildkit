// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Custom Imports ----
import SideMenu from "./SideMenu";
import ZHOPopover from "./Popover";
// #endregion

const ZGlobalComponents: React.FC = () => {
  return (
    <>
      <SideMenu />
      <ZHOPopover />
    </>
  );
};

export default ZGlobalComponents;
