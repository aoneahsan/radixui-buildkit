// #region ---- Core Imports ----
import React, { useCallback } from "react";

// #endregion

// #region ---- Packages Imports ----
import { useRecoilValue } from "recoil";

// #endregion

// #region ---- Custom Imports ----
import { ZUserRolesPermissionsRStateAtom } from "@src/store/user";

// #endregion

// #region ---- Types Imports ----
import { ZPermissionCheckModeEnum } from "@enums/general";
import { type ZCanI } from "@src/types/general/ZCan";
import type { PermissionEnum } from "zaions-tool-kit";
// #endregion

/**
 * ZCan Component
 * This component checks the user's permissions and role to conditionally render its children.
 *
 * @param {React.ReactNode} children - The content to be rendered if the user has the required permissions and role.
 * @param {PermissionEnum[]} [permissions=[]] - An array of permissions to check against the user's permissions.
 * @param {boolean} [returnPermissionDeniedView=false] - If true, render a permission denied view when the user lacks permissions.
 * @param {ZPermissionCheckModeEnum} [checkMode=ZPermissionCheckModeEnum.every] - Mode to check permissions: 'every' or 'any'.
 * @param {RoleEnum | null} [role=null] - The role to check against the user's role.
 *
 * @returns {React.ReactElement | null} - Returns the children if the user has the required permissions and role, otherwise returns null or a permission denied view.
 */
const ZCan: React.FC<ZCanI> = ({
  children,
  roles = [],
  permissions = [],
  checkMode = ZPermissionCheckModeEnum.every,
  returnPermissionDeniedView = false,
}): React.ReactElement | null => {
  const { permissions: userPermissions, roles: userRole } = useRecoilValue(
    ZUserRolesPermissionsRStateAtom
  );

  // Check if the user has a specific permission
  const hasPermission = useCallback(
    (permission: PermissionEnum) => userPermissions?.includes(permission),
    [userPermissions]
  );

  // Check if the user has a specific role
  // const hasRole = useCallback(
  //   () => role === null || userRole === role,
  //   [role, userRole]
  // );

  // Check if the user has one of the specific roles
  const hasRole = useCallback(
    () =>
      roles?.length === 0 || roles?.every((_role) => userRole?.includes(_role)),
    [roles, userRole]
  );

  // Determine if the user has the required permissions based on the check mode
  const hasRequiredPermission = useCallback(() => {
    if (!permissions || permissions?.length === 0) {
      return true;
    }
    return checkMode === ZPermissionCheckModeEnum.every
      ? permissions.every(hasPermission)
      : permissions.some(hasPermission);
  }, [permissions, checkMode, hasPermission]);

  // Render children if the user has the required permissions and role
  if (hasRequiredPermission() && hasRole()) {
    return <>{children}</>;
  }

  return null;
};

export default ZCan;
