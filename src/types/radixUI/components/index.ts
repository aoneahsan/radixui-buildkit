import type { Responsive } from "@radix-ui/themes/dist/cjs/props";
import type { ZRUColorE, ZRUMarginI, ZRURadiusE, ZRUSizeT, ZRUVariantE } from "..";

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