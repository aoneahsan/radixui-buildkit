import { ZGenericObject } from "../general";

export enum ZSideE {
    start = 'start',
    end = 'end'
}

// app vise sidebar interface
export interface ZSidebarI {
    isOpen?: boolean;
    component?: React.FC<unknown>;
    containerClassName?: string
    containerStyle?: React.CSSProperties
    componentProps?: ZGenericObject<unknown>;

    //
    width?: string;
    shouldBackdropClose?: boolean;
    side?: ZSideE;
}