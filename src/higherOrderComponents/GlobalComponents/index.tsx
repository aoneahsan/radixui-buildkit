// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Custom Imports ----
import SideMenu from "./SideMenu";
import ZHOPopover from "./Popover";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
// #endregion

const ZGlobalComponents: React.FC = () => {
  return (
    <>
      <SideMenu />
      <ZHOPopover />

      <ToastContainer />
    </>
  );
};

export default ZGlobalComponents;
