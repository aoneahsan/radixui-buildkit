// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
// #endregion

// #region ---- Custom Imports ----
import ZRUButton from "@src/components/radixUI/ZRUButton";

// #endregion

// #region ---- Types Imports ----

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----
import { Z404Svg } from "@src/assets";

// #endregion

// #region ---- Types Imports ----

// #endregion

const NotFound404Page: React.FC<{
  showHomeButton?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}> = ({ showHomeButton = true, onClick }) => {
  return (
    <div className="w-full lg:pt-[4rem] maxLg:pt-[2rem] pb-[2rem] h-screen bg-secondary text-center flex items-center justify-center flex-col">
      <Z404Svg className="w-[10rem] h-[10rem] text-primary" />
      <h3 className="text-primary mt-9 text-[1.8rem] font-black font-mont-heavy">
        Page Not Fount
      </h3>

      {showHomeButton ? (
        <ZRUButton className="uppercase mt-9" onClick={onClick}>
          Go to Home
        </ZRUButton>
      ) : null}
    </div>
  );
};

export default NotFound404Page;
