import { ZPopoverRStateAtom, ZSidebarRStateAtom } from "@src/store";
import { ZGenericObject } from "@src/types";
import { useSetRecoilState } from "recoil";

/**
 * Custom hook for managing a sidebar state in a React application.
 *
 * @template T - The type for the additional properties passed to the sidebar component.
 * @param component - The React component to be rendered in the sidebar.
 * @param props - Additional properties to be passed to the sidebar component.
 * @returns An object containing functions to open and close the sidebar.
 */
export const useZSideBar = <T>({
    component,
    props,
    width,
    containerClassName,
    containerStyle
}: {
    // eslint-disable-next-line
    component: React.FC<any>;
    props?: ZGenericObject<T>;
    width?: string;
    containerClassName?: string
    containerStyle?: React.CSSProperties
}): {
    openSidebar: () => void;
    closeSidebar: () => void;
} => {
    const setSidebarRStateAtom = useSetRecoilState(ZSidebarRStateAtom);

    /**
     * Opens the sidebar and sets its content.
     */
    const openSidebar = (): void => {
        setSidebarRStateAtom((oldValues) => ({
            ...oldValues,
            isOpen: true,
            component,
            componentProps: { closeSidebar, ...props },
            width,
            containerClassName,
            containerStyle
        }));
    };

    /**
     * Closes the sidebar.
     */
    const closeSidebar = (): void => {
        setSidebarRStateAtom((oldValues) => ({
            ...oldValues,
            isOpen: false
        }));
    };

    return { openSidebar, closeSidebar };
};

/**
 * Custom hook for managing a popover state and actions.
 *
 * @param component - The React component to be rendered inside the popover.
 * @param props - Optional additional properties to be passed to the popover component.
 *
 * @returns An object containing functions to show and hide the popover.
 */
export const useZPopover = <T>({
    component,
    componentProps,
    width,
    height,
    containerClassName
}: {
    // eslint-disable-next-line
    component: React.FC<any>
    width?: string;
    height?: string;
    containerClassName?: string;
    componentProps?: ZGenericObject<T>;
    onDidDismiss?: <P>(props?: P) => void;
}): {
    showPopover: (showPopoverProps?: {
        componentProps?: ZGenericObject<T> | undefined;
        onDidDismiss?: (<P>(props?: P | undefined) => void) | undefined;
    }) => void;
    hidePopover: () => void;
} => {
    let _onDidDismiss: (<P>(props?: P) => void) | undefined;
    const setZPopoverRStateAtom = useSetRecoilState(ZPopoverRStateAtom);

    /**
     * Function to hide the popover.
     */
    const hidePopover = <A>(props?: ZGenericObject<A>): void => {
        if (_onDidDismiss !== undefined) {
            _onDidDismiss(props);
        }
        //
        setZPopoverRStateAtom((oldValues) => ({
            ...oldValues,
            isOpen: false
        }));
    };

    /**
     * Function to show the popover.
     */
    const showPopover = (showPopoverProps?: {
        componentProps?: ZGenericObject<T>;
        onDidDismiss?: <P>(props?: P) => void;
    }): void => {
        setZPopoverRStateAtom((oldValues) => ({
            ...oldValues,
            isOpen: true,
            component,
            componentProps: {
                hidePopover,
                ...componentProps,
                ...showPopoverProps?.componentProps
            },
            width,
            height,
            containerClassName
        }));

        if (
            showPopoverProps?.onDidDismiss !== undefined &&
            showPopoverProps?.onDidDismiss !== null
        ) {
            _onDidDismiss = showPopoverProps?.onDidDismiss;
        }
    };

    return { showPopover, hidePopover };
};

