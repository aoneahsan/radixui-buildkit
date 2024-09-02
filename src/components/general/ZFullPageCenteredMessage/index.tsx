import { ZButton, ZFlex, ZHeading } from "@src/components/radixUI";
import {
  ZRUAlignE,
  ZRUDirectionE,
  ZRUGeneralAlignE,
  ZRUJustifyE,
} from "@src/types";

interface IZFullPageCenteredMessageProps {
  message: string;
  showGoToHomeButton?: boolean;
  homeBtnOnClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ZFullPageCenteredMessage: React.FC<IZFullPageCenteredMessageProps> = ({
  message,
  showGoToHomeButton = true,
  homeBtnOnClick,
}) => {
  return (
    <ZFlex
      minHeight="68vh"
      justify={ZRUJustifyE.center}
      align={ZRUAlignE.center}
      direction={ZRUDirectionE.column}
    >
      <ZHeading align={ZRUGeneralAlignE.center}>{message}</ZHeading>
      {showGoToHomeButton ? (
        <ZButton onClick={homeBtnOnClick} mt="4">
          Go Back Home
        </ZButton>
      ) : null}
    </ZFlex>
  );
};
export default ZFullPageCenteredMessage;
