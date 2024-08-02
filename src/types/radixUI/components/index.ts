import type { Responsive } from "@radix-ui/themes/dist/cjs/props";
import type { ZRUAsE, ZRUBoxDisplayE, ZRUColorE, ZRUCommonVariantE, ZRUMarginI, ZRURadiusE, ZRUSizeT, ZRUStyleI, ZRUVariantE } from "..";
import { ZCanI } from "@src/types/general/ZCan";
import { CSSProperties } from "react";

export interface ZRUButtonI extends ZRUMarginI, Omit<ZCanI, 'children'> {
    children?: React.ReactNode;
    className?: string;
    style?: Record<string, unknown>;
    asChild?: boolean;
    size?: Responsive<ZRUSizeT>;
    variant?: ZRUVariantE;
    color?: ZRUColorE;
    highContrast?: boolean;
    radius?: ZRURadiusE;
    loading?: boolean;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ZRURadioCardsGroupI {
    children?: React.ReactNode;
    className?: string;
    style?: Record<string, unknown>;
    asChild?: boolean;
    size?: Responsive<"1" | "2" | "3">;
    variant?: ZRUCommonVariantE;
    color?: ZRUColorE;
    highContrast?: boolean;
    columns?: Responsive<string>;
    gap?: Responsive<string>;
    defaultValue?: string;
    value?: string | null;
    onChange?: React.FormEventHandler<HTMLDivElement>;
    onValueChange?: (value: string) => void;
}

export interface ZRURadioCardsItemI {
    value: string;
    children?: React.ReactNode;
    className?: string;
    style?: Record<string, unknown>;
    asChild?: boolean;
}

export interface ZRUBoxI extends ZRUStyleI, Omit<ZCanI, 'children'> {
    children?: React.ReactNode;
    asChild?: boolean;
    className?: string;
    style?: CSSProperties;
    as?: ZRUAsE;
    display?: Responsive<ZRUBoxDisplayE>;
    onClick?: () => void;
}
