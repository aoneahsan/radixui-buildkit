/**
 *  Interfaces
 */
export interface ZCurrencyI {
    value?: string;
    label?: string;
    symbol?: string;
}

export interface ZPrizeInputStateI {
    currency?: ZCurrencyI;
    prize?: string;
}

/**
 *  Interfaces
 */
export type ZPrizeInputOnChange = (e: ZPrizeInputStateI) => void
