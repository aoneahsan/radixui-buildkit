import { ZPermissionCheckModeEnum } from '@enums/general';
import type { PermissionEnum, RoleEnum } from 'ts-buildkit';

export interface ZCanI {
	children: React.ReactNode;
	permissions?: Array<PermissionEnum>;
	checkMode?: ZPermissionCheckModeEnum; // check mode if check every permissions or some permissions, etc.
	returnPermissionDeniedView?: boolean;
	roles?: Array<RoleEnum> | null;
}
