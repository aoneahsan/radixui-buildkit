// #region ---- Core Imports ----
import React, { useCallback, useMemo } from 'react';

// #endregion

// #region ---- Packages Imports ----
import { Form, Formik, FormikHelpers } from 'formik';
import { ZClassNames, validateFields, zValidationRuleE } from 'react-buildkit';

// #endregion

// #region ---- Custom Imports ----
import ZRUBox from '@src/components/radixUI/ZRUBox';
import ZRUButton from '@src/components/radixUI/ZRUButton';
import ZRUHeading from '@src/components/radixUI/ZRUHeading';
import ZRUInput from '@src/components/radixUI/ZRUInput';
import ZRUText from '@src/components/radixUI/ZRUText';

// #endregion

// #region ---- Types Imports ----
import { ZRUHeadingAsE, ZRUTextAsE } from '@enums/radixUI';
import { RegisterI } from '@src/types/pages';

// #endregion

const LoginPage: React.FC<{
	isProcessing?: boolean;
	onSubmit?: (
		values: RegisterI,
		helpers: FormikHelpers<RegisterI>
	) => void | Promise<void>;
	loginBtnClickHandler?: React.MouseEventHandler<HTMLElement>;
}> = ({ isProcessing = false, onSubmit, loginBtnClickHandler }) => {
	// #region Functions
	const formikValidation = useCallback((values: RegisterI) => {
		const errors = {};

		validateFields(
			['email', 'username', 'password'],
			values as unknown as Record<string, unknown>,
			errors,
			[
				zValidationRuleE.email,
				zValidationRuleE.string,
				zValidationRuleE.password,
			]
		);

		return errors;
	}, []);
	// #endregion

	// #region constants
	const formikInitialValues = useMemo<RegisterI>(
		() => ({
			email: '',
			username: '',
			password: '',

			// Just for frontend
			isApiError: false,
		}),
		[]
	);
	// #endregion

	return (
		<ZRUBox className='flex flex-col items-center w-full h-full mt-6'>
			<ZRUBox className='pt-3 mt-10 w-full sm:w-[25.5625rem] text-start px-1 sm:ps-4'>
				<ZRUHeading
					as={ZRUHeadingAsE.h2}
					className={ZClassNames({
						'text-tertiary text-start text-[2.25rem] font-semibold normal-case maxMd:text-center mb-4':
							true,
					})}
				>
					Register
				</ZRUHeading>

				<Formik
					initialValues={formikInitialValues}
					enableReinitialize
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
						handleChange,
						handleBlur,
						setFieldValue,
						submitForm,
					}) => {
						return (
							<Form>
								{/* Form */}
								<ZRUBox className='mt-6'>
									{/* Name filed */}
									<ZRUInput
										size='3'
										required
										name='username'
										inputClassName='w-full'
										label='Username'
										value={values?.username}
										errorMessage={errors?.username}
										isTouched={touched.username}
										onChange={(e) => {
											handleChange(e);
										}}
										onBlur={(e) => {
											handleBlur(e);
										}}
									/>

									{/* Email filed */}
									<ZRUInput
										size='3'
										required
										name='email'
										className='mt-5'
										inputClassName='w-full'
										label='Email address'
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
										size='3'
										required
										name='password'
										className='mt-5'
										label='Password'
										inputClassName='w-full'
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
								</ZRUBox>

								<ZRUBox className='mt-6'>
									<ZRUButton
										type='submit'
										size='3'
										loading={isProcessing}
										className='flex items-center justify-center w-full normal-case'
										onClick={() => {
											void submitForm();
										}}
										disabled={(!isValid && !values?.isApiError) || isProcessing}
									>
										Register
									</ZRUButton>

									<ZRUText as={ZRUTextAsE.p} className='mt-2 maxSm:text-center'>
										Already have a account.{' '}
										<ZRUText
											as={ZRUTextAsE.span}
											className='cursor-pointer text-primary hover:underline'
											onClick={loginBtnClickHandler}
										>
											Login
										</ZRUText>{' '}
										instead.
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
