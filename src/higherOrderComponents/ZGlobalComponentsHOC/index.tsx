// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Custom Imports ----
import { ToastContainer } from 'react-toastify';
import ZHOPopover from './Popover';
import SideMenu from './SideMenu';
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
