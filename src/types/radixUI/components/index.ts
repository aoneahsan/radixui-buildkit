import type { Responsive } from "@radix-ui/themes/dist/cjs/props";
import type { ZRUColorE, ZRUCommonVariantE, ZRUMarginI, ZRURadiusE, ZRUSizeT, ZRUVariantE } from "..";

export interface ZRUButtonI extends ZRUMarginI {
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
    value?: string;
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
