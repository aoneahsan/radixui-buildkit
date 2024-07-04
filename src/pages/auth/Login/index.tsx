// #region ---- Core Imports ----
import React, { useCallback, useMemo, useState } from "react";

// #endregion

// #region ---- Packages Imports ----
import { validateField, zValidationRuleE } from "zaions-react-tool-kit";
import { Formik, Form, FormikHelpers } from "formik";

// #endregion

// #region ---- Custom Imports ----
import ZRUBox from "@src/components/radixUI/ZRUBox";
import ZRUButton from "@src/components/radixUI/ZRUButton";
import ZRUHeading from "@src/components/radixUI/ZRUHeading";
import ZRUInput from "@src/components/radixUI/ZRUInput";
import ZRUText from "@src/components/radixUI/ZRUText";

// #endregion

// #region ---- Types Imports ----
import { ZRUHeadingAsE, ZRUTextAsE } from "@src/types";
import { LoginI } from "@src/types/pages";

// #endregion

const LoginPage: React.FC<{
  isProcessing?: boolean;
  onSubmit?: (
    values: LoginI,
    helpers: FormikHelpers<LoginI>
  ) => void | Promise<void>;
  forgotBtnClickHandler?: React.MouseEventHandler<HTMLElement>;
  registerBtnClickHandler?: React.MouseEventHandler<HTMLElement>;
}> = ({
  isProcessing = false,
  onSubmit,
  forgotBtnClickHandler,
  registerBtnClickHandler,
}) => {
  // #region Functions

  const formikValidation = useCallback((values: LoginI) => {
    const errors = {};
    validateField(
      "email",
      values as unknown as Record<string, unknown>,
      errors,
      zValidationRuleE.email
    );
    validateField(
      "password",
      values as unknown as Record<string, unknown>,
      errors,
      zValidationRuleE.password
    );

    return errors;
  }, []);
  // #endregion

  // #region constants
  const formikInitialValues = useMemo<LoginI>(
    () => ({
      email: "",
      password: "",

      // Just for frontend
      isApiError: false,
    }),
    []
  );
  // #endregion

  return (
    <ZRUBox className="flex flex-col items-center w-full h-full max-w-full mt-6">
      <ZRUBox className="pt-3 mt-10 w-full sm:w-[25.5625rem] text-start px-1 sm:ps-4">
        <Formik
          initialValues={formikInitialValues}
          validate={formikValidation}
          onSubmit={(values, helpers) => {
            if (onSubmit) {
              onSubmit(values, helpers);
            }
          }}
        >
          {({
            values,
            touched,
            errors,
            isValid,
            handleSubmit,
            handleChange,
            handleBlur,
            submitForm,
          }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <ZRUHeading
                  as={ZRUHeadingAsE.h2}
                  className="text-tertiary text-start text-[2.25rem] font-semibold normal-case maxMd:text-center mb-4"
                >
                  Login
                </ZRUHeading>

                <ZRUBox className="mt-5">
                  {/* Email filed */}
                  <ZRUInput
                    size="3"
                    required
                    name="email"
                    inputClassName="w-full"
                    label="Username or email address"
                    value={values?.email}
                    errorMessage={errors?.email}
                    isTouched={touched.email}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    onBlur={(e) => {
                      handleBlur(e);
                    }}
                  />

                  {/* Password filed */}
                  <ZRUInput
                    size="3"
                    required
                    name="password"
                    className="mt-5"
                    label="Password"
                    inputClassName="w-full"
                    value={values?.password}
                    errorMessage={errors?.password}
                    isTouched={touched.password}
                    onChange={(e) => {
                      handleChange(e);
                    }}
                    onBlur={(e) => {
                      handleBlur(e);
                    }}
                  />
                  <ZRUBox className="text-end">
                    <ZRUText
                      as={ZRUTextAsE.span}
                      className="cursor-pointer text-primary hover:underline"
                      onClick={forgotBtnClickHandler}
                    >
                      Forgot your password?
                    </ZRUText>
                  </ZRUBox>
                </ZRUBox>

                <ZRUBox className="mt-6">
                  <ZRUButton
                    type="button"
                    size="3"
                    loading={isProcessing}
                    className="flex items-center justify-center w-full normal-case"
                    disabled={(!isValid && !values?.isApiError) || isProcessing}
                    onClick={() => {
                      void submitForm();
                    }}
                  >
                    Log in
                  </ZRUButton>

                  <ZRUText as={ZRUTextAsE.p} className="mt-2 maxSm:text-center">
                    New here?{" "}
                    <ZRUText
                      as={ZRUTextAsE.span}
                      className="cursor-pointer text-primary hover:underline"
                      onClick={registerBtnClickHandler}
                    >
                      Register now
                    </ZRUText>{" "}
                    to unlock exclusive features and benefits!
                  </ZRUText>
                </ZRUBox>
              </Form>
            );
          }}
        </Formik>
      </ZRUBox>
    </ZRUBox>
  );
};

export default LoginPage;
