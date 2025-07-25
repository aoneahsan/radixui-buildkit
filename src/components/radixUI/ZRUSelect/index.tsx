// #region ---- Core Imports ----
import React, { useMemo } from 'react';

// #endregion

// #region ---- Packages Imports ----
import { Select } from '@radix-ui/themes';
import { ZClassNames } from 'react-buildkit';
import { isZNonEmptyString } from 'ts-buildkit';

// #endregion

// #region ---- Custom Imports ----
import { ZBox, ZButton, ZFlex, ZText } from '..';

// #endregion

// #region ---- Types Imports ----
import { Responsive } from '@radix-ui/themes/props';
import {
	ZRUAlignE,
	ZRUColorE,
	ZRUJustifyE,
	ZRUOrientationE,
	ZRUSelectContentPositionE,
	ZRUTextAsE,
	type ZRUBasicVariantE,
	type ZRURadiusE,
} from '@src/enums/radixUI';
import type {
	ZRUButtonI,
	ZRUMarginI,
	ZRUSelectValueI,
	ZRUShowable,
} from '@src/types';

interface ZRUSelectI extends ZRUShowable {
	children?: React.ReactNode;
	label?: string;
	asChild?: boolean;
	className?: string;
	labelClassName?: string;
	style?: Record<string, unknown>;
	size?: Responsive<'1' | '2' | '3'>;
	defaultOpen?: boolean;
	defaultValue?: string;
	autoComplete?: string;
	disabled?: boolean;
	name?: string;
	open?: boolean;
	required?: boolean;
	value?: string;
	isTouched?: boolean;
	errorMessage?: string;
	infoText?: string;
	triggerClassName?: string;
	onOpenChange?(open: boolean): void;
	onValueChange?(value: string): void;

	trigger?: {
		variant?: ZRUBasicVariantE;
		color?: ZRUColorE;
		radius?: ZRURadiusE;
		placeholder?: string;
		className?: string;
	} & ZRUMarginI;

	content?: {
		color?: ZRUColorE;
		highContrast?: boolean;
		position?: ZRUSelectContentPositionE;
	};

	options?: Array<ZRUSelectValueI>;
	labelOrientation?: ZRUOrientationE;
	position?: ZRUSelectContentPositionE;

	showLabelBtn?: boolean;
	labelBtnProps?: ZRUButtonI;
}
// #endregion

const ZRUSelect: React.FC<ZRUSelectI> = (props) => {
	const _isError = useMemo(
		() =>
			Array.isArray(props?.errorMessage)
				? props?.errorMessage?.length > 0
				: typeof props?.errorMessage === 'string'
				? isZNonEmptyString(props?.errorMessage)
				: false,
		[props?.errorMessage]
	);

	return (
		<ZBox
			show={props?.show}
			className={ZClassNames(props?.className, {
				'flex items-center gap-1':
					props?.labelOrientation === ZRUOrientationE.horizontal,
			})}
		>
			<ZFlex align={ZRUAlignE.center} justify={ZRUJustifyE.between}>
				{isZNonEmptyString(props?.label) ? (
					<ZText
						as={ZRUTextAsE.label}
						size='1'
						className={ZClassNames('text-base block', props?.labelClassName)}
					>
						{props?.label}
						{props?.required ? (
							<ZText
								as={ZRUTextAsE.span}
								className='ms-1'
								color={ZRUColorE.tomato}
							>
								*
							</ZText>
						) : null}
					</ZText>
				) : null}

				{props?.showLabelBtn ? (
					<ZButton
						{...props?.labelBtnProps}
						size={props?.labelBtnProps?.size ?? '1'}
						className={ZClassNames(
							'mb-1 me-2',
							props?.labelBtnProps?.className
						)}
					>
						{props?.labelBtnProps?.children}
					</ZButton>
				) : null}
			</ZFlex>

			<Select.Root
				size={props.size ?? '3'}
				name={props.name}
				open={props.open}
				value={props.value}
				disabled={props.disabled}
				defaultOpen={props.defaultOpen}
				defaultValue={props.defaultValue}
				autoComplete={props.autoComplete}
				onOpenChange={props.onOpenChange}
				onValueChange={props.onValueChange}
			>
				<Select.Trigger
					{...props?.trigger}
					className={props.triggerClassName}
				/>

				<Select.Content
					{...props?.content}
					position={props?.position ?? ZRUSelectContentPositionE.popper}
				>
					{props?.options?.map((option, index) => {
						return (
							<Select.Item value={String(option?.value)} key={index}>
								{option?.label}
							</Select.Item>
						);
					})}
				</Select.Content>
			</Select.Root>

			{/* Error */}
			{props?.isTouched && _isError ? (
				<ZText
					as={ZRUTextAsE.span}
					size='1'
					color={ZRUColorE.tomato}
					className='font-medium'
				>
					{Array.isArray(props?.errorMessage)
						? props?.errorMessage[0]
						: props?.errorMessage}
				</ZText>
			) : null}

			{/* Info */}
			{!props?.isTouched && isZNonEmptyString(props?.infoText) ? (
				<ZText
					as={ZRUTextAsE.span}
					size='1'
					color={ZRUColorE.gold}
					className='font-medium'
				>
					{props?.infoText}
				</ZText>
			) : null}
		</ZBox>
	);
};

export default ZRUSelect;
