import { ZSidebarRStateAtom } from "@src/store";
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
    width
}: {
    // eslint-disable-next-line
    component: React.FC<any>;
    props?: ZGenericObject<T>;
    width?: string;
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
            width: width
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