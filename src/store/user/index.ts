import { atom } from "recoil";
import type { PermissionEnum, RoleEnum } from "zaions-tool-kit";

export const ZUserRolesPermissionsRStateAtom = atom<{
    permissions: Array<PermissionEnum> | null
    role: RoleEnum | null
}>(({
    key: 'ZUserRolesPermissionsRStateAtom_key',
    default: {
        permissions: null,
        role: null
    }
}))