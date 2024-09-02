import { Network } from "@capacitor/network";
import ErrorBoundary from "@src/components/general/ErrorBoundary";
import FullPageLoader from "@src/components/general/FullPageLoader";
import ZNetworkDisconnected from "@src/components/general/ZNetworkDisconnected";
import { ReactNode, useEffect, useState } from "react";

const NetworkDetectHOC: React.FC<{
  children: ReactNode;
  errorComponent?: {
    message?: string;
    showGoToHomeButton?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    btnText?: string;
  };
}> = ({ children, errorComponent }) => {
  const [networkConnectionRState, setNetworkConnectionRState] = useState<{
    processing: boolean;
    isConnected: boolean;
    errorOcurred: boolean;
  }>({
    processing: true,
    isConnected: true,
    errorOcurred: false,
  });

  useEffect(() => {
    void (async () => {
      try {
        const status = await Network.getStatus();
        setNetworkConnectionRState((oldState) => ({
          ...oldState,
          processing: false,
          isConnected: status.connected,
          errorOcurred: false,
        }));
      } catch (error) {
        setNetworkConnectionRState((oldState) => ({
          ...oldState,
          processing: false,
          errorOcurred: true,
        }));
      }

      try {
        Network.addListener("networkStatusChange", (status) => {
          setNetworkConnectionRState((oldState) => ({
            ...oldState,
            processing: false,
            isConnected: status.connected,
            errorOcurred: false,
          }));
        });
      } catch (error) {
        setNetworkConnectionRState((oldState) => ({
          ...oldState,
          processing: false,
          errorOcurred: true,
        }));
      }
    })();
  }, []);

  return networkConnectionRState.processing ? (
    <FullPageLoader />
  ) : networkConnectionRState.errorOcurred ? (
    <ErrorBoundary
      message={errorComponent?.message}
      showGoToHomeButton={errorComponent?.showGoToHomeButton}
      onClick={errorComponent?.onClick}
      btnText={errorComponent?.btnText}
    />
  ) : networkConnectionRState.isConnected ? (
    children
  ) : (
    <ZNetworkDisconnected />
  );
};
export default NetworkDetectHOC;
