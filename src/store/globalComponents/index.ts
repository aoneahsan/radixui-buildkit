import { ZPopoverI, ZSidebarI } from "@src/types";
import { atom, type RecoilState } from "recoil";

export const ZSidebarRStateAtom: RecoilState<ZSidebarI> = atom<ZSidebarI>({
  key: "ZSidebarRStateAtom_Key",
  default: {
    isOpen: false,
    shouldBackdropClose: true,
  },
});

export const ZPopoverRStateAtom: RecoilState<ZPopoverI> = atom<ZPopoverI>({
  key: "ZPopoverRStateAtom_key",
  default: {
    isOpen: false,
  },
});
