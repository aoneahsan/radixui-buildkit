import { ReactNode } from "react";

export * from './ZRSelect';
export * from './ZCan';
export * from './ZPrizeInput';

export type ZGenericObject<T> = Record<string, T>;

export interface ZRSelectOptions {
    readonly value?: string | number;
    readonly label?: ReactNode | string | number;
    readonly color?: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
    readonly className?: string;
    readonly extraData?: string;

    // others
    readonly symbol?: string;
}

