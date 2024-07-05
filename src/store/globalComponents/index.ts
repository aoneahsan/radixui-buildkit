import { ZSidebarI } from "@src/types";
import { atom } from "recoil";

export const ZSidebarRStateAtom = atom<ZSidebarI>({
    key: 'ZSidebarRStateAtom_Key',
    default: {
        isOpen: false,
        shouldBackdropClose: true
    }
});