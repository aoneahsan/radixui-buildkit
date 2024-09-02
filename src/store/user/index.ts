import { atom } from "recoil";
import type { PermissionEnum, RoleEnum } from "zaions-tool-kit";

export const ZUserRolesPermissionsRStateAtom = atom<{
    permissions: Array<PermissionEnum> | null
    roles: Array<RoleEnum> | null
}>(({
    key: 'ZUserRolesPermissionsRStateAtom_key',
    default: {
        permissions: null,
        roles: null
    }
}))