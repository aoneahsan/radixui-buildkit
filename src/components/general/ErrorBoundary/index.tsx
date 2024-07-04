import ZRUFlex from "../../radixUI/ZRUFlex";
import ZRUHeading from "../../radixUI/ZRUHeading";
import ZRUButton from "../../radixUI/ZRUButton";
import {
  ZRUAlignE,
  ZRUDirectionE,
  ZRUGeneralAlignE,
  ZRUJustifyE,
} from "@src/types";

type IErrorBoundaryProps = {
  message?: string;
  showGoToHomeButton?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  btnText?: string;
};

const ErrorBoundary: React.FC<IErrorBoundaryProps> = ({
  message = "Something went wrong",
  showGoToHomeButton = true,
  btnText = "Go Back Home",
  onClick,
}) => {
  return (
    <ZRUFlex
      minHeight="68vh"
      justify={ZRUJustifyE.center}
      align={ZRUAlignE.center}
      direction={ZRUDirectionE.column}
    >
      <ZRUHeading align={ZRUGeneralAlignE.center}>{message}</ZRUHeading>
      {showGoToHomeButton ? (
        <ZRUButton onClick={onClick} mt="4">
          {btnText}
        </ZRUButton>
      ) : null}
    </ZRUFlex>
  );
};
export default ErrorBoundary;
