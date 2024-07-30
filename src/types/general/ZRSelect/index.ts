import type { ActionMeta, GroupBase, MultiValue, OptionsOrGroups, PropsValue, SingleValue, StylesConfig } from "react-select";
import type { ZRSelectOptions } from "..";
import type { SelectComponents } from "react-select/dist/declarations/src/components";
import { ZRUButtonI } from "@src/types/radixUI/components";

export type ZRSelectI = {
    className?: string;
    labelClassName?: string;
    label?: string;
    selectClassName?: string;
    classNamePrefix?: string;
    required?: boolean;
    name?: string;
    placeholder?: React.ReactNode;
    disabled?: boolean;
    isClearable?: boolean;
    isDisabled?: boolean;
    isRtl?: boolean;
    isSearchable?: boolean;
    isTouched?: boolean;
    errorMessage?: string;
    value?: PropsValue<ZRSelectOptions>;
    defaultValue?: PropsValue<ZRSelectOptions>;
    options: OptionsOrGroups<ZRSelectOptions, GroupBase<ZRSelectOptions>>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    style?: React.CSSProperties;
    infoText?: string;
    styles?: StylesConfig<ZRSelectOptions, boolean, GroupBase<ZRSelectOptions>>;
    menuIsOpen?: boolean
    components?: Partial<
        SelectComponents<ZRSelectOptions, boolean, GroupBase<ZRSelectOptions>>
    >;
    showLabelBtn?: boolean;
    labelBtnProps?: ZRUButtonI;
} & (
        | {
            isMulti?: false;
            onChange?: (
                newValue: SingleValue<ZRSelectOptions>,
                actionMeta: ActionMeta<ZRSelectOptions>
            ) => void;
        }
        | {
            isMulti: true;
            onChange?: (
                newValue: MultiValue<ZRSelectOptions>,
                actionMeta: ActionMeta<ZRSelectOptions>
            ) => void;
        }
    );