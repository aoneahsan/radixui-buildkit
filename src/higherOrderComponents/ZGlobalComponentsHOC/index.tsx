// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Custom Imports ----
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ZHOPopover from "./Popover";
import SideMenu from "./SideMenu";
// #endregion

const ZGlobalComponentsHOC: React.FC = () => {
  return (
    <>
      <SideMenu />
      <ZHOPopover />

      <ToastContainer />
    </>
  );
};

export default ZGlobalComponentsHOC;
