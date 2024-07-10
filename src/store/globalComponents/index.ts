import { ZPopoverI, ZSidebarI } from "@src/types";
import { atom } from "recoil";

export const ZSidebarRStateAtom = atom<ZSidebarI>({
    key: 'ZSidebarRStateAtom_Key',
    default: {
        isOpen: false,
        shouldBackdropClose: true
    }
});


export const ZPopoverRStateAtom = atom<ZPopoverI>({
    key: 'ZPopoverRStateAtom_key',
    default: {
        isOpen: false
    }
});
