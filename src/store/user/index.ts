import { atom } from "recoil";
import type { PermissionEnum } from "zaions-tool-kit";

export const ZUserPermissionsRStateAtom = atom<Array<PermissionEnum> | null>(({
    key: 'ZUserPermissionsRStateAtom_key',
    default: null
}))