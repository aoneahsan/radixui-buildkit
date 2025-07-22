// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----
import { Slider } from '@radix-ui/themes';
import { ZClassNames } from 'react-buildkit';
import { isZNonEmptyString } from 'ts-buildkit';

// #endregion

// #region ---- Custom Imports ----
import { ZBox, ZText } from '..';

// #endregion

// #region ---- Types Imports ----
import {
	ZRUColorE,
	ZRUTextAsE,
	type ZRURadiusE,
	type ZRUTriggerVariantE,
} from '@enums/radixUI';
import type { Responsive } from '@radix-ui/themes/props';
interface ZRUSliderI {
	size?: Responsive<'1' | '2' | '3'>;
	variant?: ZRUTriggerVariantE;
	color?: ZRUColorE;
	highContrast?: boolean;
	radius?: ZRURadiusE;
	className?: string;
	style?: Record<string, unknown>;
	value?: number[];
	defaultValue?: number[];
	onValueChange?(value: number[]): void;
	onBlur?: React.FocusEventHandler<HTMLDivElement>;
	name?: string;
	label?: string;
	required?: string;
	labelClassName?: string;
}
// #endregion

const ZRUSlider: React.FC<ZRUSliderI> = ({
	size,
	variant,
	color,
	highContrast,
	radius,
	className,
	style,
	value,
	defaultValue,
	name,
	label,
	required,
	labelClassName,
	onValueChange,
	onBlur,
}) => {
	return (
		<ZBox>
			{isZNonEmptyString(label) ? (
				<ZText as={ZRUTextAsE.label} className={ZClassNames(labelClassName)}>
					{label}
					{required ? (
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
			<Slider
				size={size}
				variant={variant}
				color={color}
				highContrast={highContrast}
				radius={radius}
				className={className}
				style={style}
				value={value}
				defaultValue={defaultValue}
				name={name}
				onValueChange={onValueChange}
				onBlur={onBlur}
			></Slider>
		</ZBox>
	);
};

export default ZRUSlider;
