import { RegisterFormFieldsEnum } from '@enums/formData';
import { ZRUInputTypeE } from '@src/types';
import { FormFieldsEnum } from 'zaions-tool-kit';

export const loginFormFields = {
	[RegisterFormFieldsEnum.email]: {
		type: ZRUInputTypeE.email,
		placeholder: 'Email',
	},
	[RegisterFormFieldsEnum.password]: {
		type: ZRUInputTypeE.password,
		placeholder: 'Password',
	},
} as const;

export const registerFormFields = {
	[RegisterFormFieldsEnum.name]: {
		type: ZRUInputTypeE.text,
		placeholder: 'Name',
	},
	...loginFormFields,
	[RegisterFormFieldsEnum.passwordConfirmation]: {
		type: FormFieldsEnum.password,
		placeholder: 'Password Confirmation',
	},
} as const;

export const userAccountDataFormFields = {
	[RegisterFormFieldsEnum.name]: {
		type: ZRUInputTypeE.text,
		placeholder: 'Name',
	},
} as const;
