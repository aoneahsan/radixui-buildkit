// #region ---- Core Imports ----
import React from "react";
import ZRUText from "../../radixUI/ZRUText";

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----

// #endregion

const ZNetworkDisconnected: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 bg-opacity-50 bg-white/70">
      <div className="px-6 py-3 mx-auto shadow-lg bg-warning/70 w-max h-max">
        <ZRUText className="block text-lg">Connection failure</ZRUText>
        <ZRUText className="block text-sm">
          Cannot connect because there is no Internet access available.
        </ZRUText>
        {/* <ZIonButton className='mt-3'>Reload</ZIonButton> */}
      </div>
    </div>
  );
};

export default ZNetworkDisconnected;
