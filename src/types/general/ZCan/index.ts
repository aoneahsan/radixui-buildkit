import type { PermissionEnum, RoleEnum } from "zaions-tool-kit";

export enum ZPermissionCheckModeEnum {
    every = 'every', // user must have every permissions that have passed.
    any = 'any' // user must have any permissions that have passed.
}

export interface ZCanI {
    children: React.ReactNode;
    permissions?: Array<PermissionEnum>;
    checkMode?: ZPermissionCheckModeEnum; // check mode if check every permissions or some permissions, etc.
    returnPermissionDeniedView?: boolean;
    role?: RoleEnum | null;
}