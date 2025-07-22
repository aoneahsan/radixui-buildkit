import { atom, type RecoilState } from 'recoil';
import type { PermissionEnum, RoleEnum } from 'ts-buildkit';

export const ZUserRolesPermissionsRStateAtom: RecoilState<{
	permissions: Array<PermissionEnum> | null;
	roles: Array<RoleEnum> | null;
}> = atom<{
	permissions: Array<PermissionEnum> | null;
	roles: Array<RoleEnum> | null;
}>({
	key: 'ZUserRolesPermissionsRStateAtom_key',
	default: {
		permissions: null,
		roles: null,
	},
});
