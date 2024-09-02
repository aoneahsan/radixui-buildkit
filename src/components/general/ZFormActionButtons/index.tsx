import { ZFormModeE } from "@enums/formData";
import { ZBox, ZButton, ZFlex } from "@src/components/radixUI";
import { ZRUColorE, ZRUJustifyE } from "@src/types";
import { useFormikContext } from "formik";

interface IZFormActionButtonsProps {
  showResetButton?: boolean;
  showSubmitButton?: boolean;
  resetButtonText?: string;
  submitButtonText?: string;
  onResetClicked?: () => void;
  processing?: boolean;
  mode?: ZFormModeE;
}
const ZFormActionButtons: React.FC<IZFormActionButtonsProps> = ({
  resetButtonText,
  showResetButton = true,
  showSubmitButton = true,
  submitButtonText,
  onResetClicked,
  processing,
  mode = ZFormModeE.add,
}) => {
  const formik = useFormikContext();

  if (!formik) {
    return (
      <ZBox className="mb-3">
        <p aria-colspanstyle={{ color: "red" }}>
          Error: Please use ZFormActionButtons inside a Formik form.
        </p>
      </ZBox>
    );
  }

  const { dirty, isValid } = formik;
  return (
    <ZBox className="mb-3">
      <ZFlex justify={ZRUJustifyE.between} className="gap-3 maxSm:flex-col">
        {showResetButton ? (
          <ZButton
            type={!!onResetClicked ? "button" : "reset"}
            color={ZRUColorE.red}
            disabled={processing || !dirty}
            onClick={onResetClicked}
          >
            {resetButtonText ?? "Reset"}
          </ZButton>
        ) : null}
        {showSubmitButton ? (
          <ZButton
            type="submit"
            disabled={
              !isValid || processing || (mode === ZFormModeE.edit && !dirty)
            }
            loading={processing}
          >
            {submitButtonText ?? "Submit"}
          </ZButton>
        ) : null}
      </ZFlex>
    </ZBox>
  );
};

export default ZFormActionButtons;
