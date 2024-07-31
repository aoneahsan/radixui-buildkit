// #region ---- Core Imports ----
import React from "react";

// #endregion

// #region ---- Packages Imports ----
import { useRecoilValue } from "recoil";

// #endregion

// #region ---- Custom Imports ----
import { ZUserPermissionsRStateAtom } from "@src/store/user";

// #endregion

// #region ---- Types Imports ----
import type { PermissionEnum } from "zaions-tool-kit";
import { type ZCanI, ZPermissionCheckModeEnum } from "@src/types/general/ZCan";
// #endregion

const ZCan: React.FC<ZCanI> = ({
  children,
  havePermissions = [],
  returnPermissionDeniedView = false,
  checkMode = ZPermissionCheckModeEnum.every,
}) => {
  const userPermissions = useRecoilValue(ZUserPermissionsRStateAtom);

  const hasPermission = (permission: PermissionEnum) =>
    userPermissions?.includes(permission);

  const hasRequiredPermission = () => {
    if (checkMode === ZPermissionCheckModeEnum.every) {
      return havePermissions?.every(hasPermission);
    }
    return havePermissions?.some(hasPermission);
  };

  if (havePermissions?.length === 0 || hasRequiredPermission()) {
    return <>{children}</>;
  }

  return null;
};

export default ZCan;
