import { ZFormModeE } from "@enums/formData";
import { ZBox, ZButton, ZFlex, ZText } from "@src/components/radixUI";
import { ZRUColorE, ZRUJustifyE } from "@src/enums";
import { useFormikContext } from "formik";

interface IZFormActionButtonsProps {
  showResetButton?: boolean;
  resetButtonColor?: ZRUColorE;
  showSubmitButton?: boolean;
  resetButtonText?: React.ReactNode;
  resetButtonDisable?: boolean;
  submitButtonText?: string;
  onResetClicked?: () => void;
  processing?: boolean;
  mode?: ZFormModeE;
  disableSubmitOnFormNotValid?: boolean;
}
const ZFormActionButtons: React.FC<IZFormActionButtonsProps> = ({
  resetButtonText = "Reset",
  resetButtonDisable,
  resetButtonColor = ZRUColorE.red,
  showResetButton = true,
  showSubmitButton = true,
  submitButtonText,
  onResetClicked,
  processing,
  mode = ZFormModeE.add,
  disableSubmitOnFormNotValid = true,
}) => {
  const formik = useFormikContext();

  if (!formik) {
    return (
      <ZBox className="mb-3">
        <ZText color={ZRUColorE.tomato}>
          Error: Please use ZFormActionButtons inside a Formik form.
        </ZText>
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
            color={resetButtonColor}
            disabled={resetButtonDisable ?? (processing || !dirty)}
            onClick={onResetClicked}
          >
            {resetButtonText}
          </ZButton>
        ) : null}
        {showSubmitButton ? (
          <ZButton
            type="submit"
            disabled={
              (disableSubmitOnFormNotValid && !isValid) ||
              processing ||
              (mode === ZFormModeE.edit && !dirty)
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
