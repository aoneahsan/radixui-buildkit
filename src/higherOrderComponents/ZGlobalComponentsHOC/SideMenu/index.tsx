// #region ---- Core Imports ----
import React, { useEffect, useMemo } from "react";

// #endregion

// #region ---- Packages Imports ----
import { useRecoilState } from "recoil";
import { ZClassNames } from "zaions-react-tool-kit";
import { isZNonEmptyString } from "zaions-tool-kit";

// #endregion

// #region ---- Custom Imports ----
import { ZBox, ZCard } from "@src/components";

// #endregion

// #region ---- Types Imports ----

// #endregion

// #region ---- Store Imports ----
import ZSafeAreaHOC from "@src/higherOrderComponents/ZSafeAreaHOC";
import { ZSidebarRStateAtom } from "@src/store";

// #endregion

// #region ---- Images Imports ----

// #endregion

const SideMenu: React.FC = () => {
  const [ZSidebarRState, setZSidebarRState] =
    useRecoilState(ZSidebarRStateAtom);
  const rootConStyles = useMemo(
    () => ({
      ...ZSidebarRState.rootConStyle,
    }),
    [ZSidebarRState.rootConStyle]
  );
  const containerStyles = useMemo(
    () => ({
      width: ZSidebarRState.width,
      ...ZSidebarRState.containerStyle,
    }),
    [ZSidebarRState.width, ZSidebarRState.containerStyle]
  );

  useEffect(() => {
    if (ZSidebarRState.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [ZSidebarRState.isOpen]);

  return (
    <ZSafeAreaHOC>
      <ZBox
        className={ZClassNames({
          "fixed top-0 right-0 p-2 z-50 bg-transparent transition-all ease-in-out duration-300 h-full w-full flex justify-start":
            true,
          "opacity-100 translate-x-0": ZSidebarRState?.isOpen,
          "opacity-0 -translate-x-[100%]": ZSidebarRState?.isOpen === false,
        })}
        style={rootConStyles}
      >
        <ZBox
          className={ZClassNames({
            "absolute top-0 left-0 w-full h-full z-2": true,
            "bg-transparent": !ZSidebarRState?.shouldBackdropClose,
            "cursor-pointer bg-[rgba(0,0,0,0.4)]":
              ZSidebarRState?.shouldBackdropClose,
          })}
          onClick={() => {
            if (ZSidebarRState?.shouldBackdropClose === true) {
              setZSidebarRState((oldValues) => ({
                ...oldValues,
                isOpen: false,
              }));
            }
          }}
        ></ZBox>
        <ZCard
          className={ZClassNames(ZSidebarRState.containerClassName, {
            "relative z-50 h-full shadow-lg": true,
            "maxSm:w-[75%!important] maxMd:w-1/2 xl:w-1/3": !isZNonEmptyString(
              ZSidebarRState.width
            ),
          })}
          style={containerStyles}
        >
          {ZSidebarRState?.component !== undefined &&
          ZSidebarRState?.component !== null ? (
            <ZSidebarRState.component {...ZSidebarRState.componentProps} />
          ) : null}
        </ZCard>
      </ZBox>
    </ZSafeAreaHOC>
  );
};

export default SideMenu;
