// #region ---- Core Imports ----
import React, { useMemo } from 'react';

// #endregion

// #region ---- Packages Imports ----
import {
	cyan,
	cyanDark,
	indigo,
	indigoDark,
	slate,
	slateA,
	slateDark,
	slateDarkA,
} from '@radix-ui/colors';
import { useThemeContext } from '@radix-ui/themes';
import { StylesConfig } from 'react-select';

// #endregion

// #region ---- Custom Imports ----
import ZRSelect from '../ZSelect';

// #endregion

// #region ---- Types Imports ----
import { ZRUAlignE } from '@enums/radixUI';
import { ZFlex, ZSpinner } from '@src/components/radixUI';
import { ZRSelectI } from '@src/types';
import { ZClassNames } from 'react-buildkit';

// #endregion

// just for reminder we name it ZRCSelect (Z React Custom Select) instead of ZRSelect because we already have ZRSelect in package made by using react select
/**
 * Select component made by using react select and Radix UI
 */
const ZRCSelect: React.FC<ZRSelectI> = (props) => {
	const radixThemeContext = useThemeContext();
	const isDarkMode = useMemo(
		() => radixThemeContext.appearance === 'dark',
		[radixThemeContext.appearance]
	);

	const radius = useMemo(() => {
		switch (radixThemeContext?.radius) {
			case 'full':
				return '2rem';
			case 'large':
				return '.6rem';
			case 'medium':
				return '.4rem';
			case 'small':
				return '.3rem';
			case 'none':
				return '';
		}
	}, [radixThemeContext?.radius]);

	const styles: StylesConfig<any> = {
		control: (styles, { isFocused }) => ({
			...styles,
			borderColor: isFocused
				? isDarkMode
					? indigoDark.indigo7
					: indigo.indigo7
				: `${isDarkMode ? slateDark.slate7 : slate.slate7} !important`,
			borderWidth: '1px',
			backgroundColor: isDarkMode ? slateDark.slate1 : slate.slate1,
			borderRadius: radius,
			boxShadow: isFocused
				? `inset 0 0 0 1px ${isDarkMode ? indigoDark.indigo7 : indigo.indigo7}`
				: '',
		}),
		input: (styles) => ({
			...styles,
			color: isDarkMode ? indigo.indigo1 : indigoDark.indigo1,
		}),
		placeholder: (styles) => ({
			...styles,
			color: isDarkMode ? slateDarkA.slateA10 : slateA.slateA10,
		}),
		dropdownIndicator: (styles) => ({
			...styles,
			color: isDarkMode ? slateDarkA.slateA10 : slateA.slateA10,
		}),
		indicatorSeparator: (styles) => ({
			...styles,
			backgroundColor: isDarkMode ? slateDarkA.slateA10 : slateA.slateA10,
		}),
		menu: (styles) => {
			return {
				...styles,
				backgroundColor: isDarkMode ? slateDark.slate4 : slate.slate4,
				borderRadius: '.5rem',
				overflow: 'hidden',
				padding: '.3rem 0',
				border: `1px solid ${isDarkMode ? slateDark.slate7 : slate.slate7}`,
			};
		},
		menuList: (styles) => ({
			...styles,
			backgroundColor: isDarkMode ? slateDark.slate4 : slate.slate4,
		}),
		option: (styles, { isSelected }) => ({
			...styles,
			backgroundColor: isSelected
				? isDarkMode
					? indigoDark.indigo7
					: indigo.indigo7
				: isDarkMode
				? slateDark.slate4
				: slate.slate4,
			':hover': {
				backgroundColor: isSelected
					? undefined
					: isDarkMode
					? slateDark.slate8
					: slate.slate8,
			},
		}),
		singleValue: (styles) => ({
			...styles,
			color: isDarkMode ? indigo.indigo1 : indigoDark.indigo1,
		}),
		multiValue: (styles) => ({
			...styles,
			background: isDarkMode ? cyanDark.cyan5 : cyan.cyan5,
			color: isDarkMode
				? `${indigo.indigo1} !important`
				: `${indigoDark.indigo1} !important`,
			borderRadius: '.4rem',
			overflow: 'hidden',
		}),
		multiValueLabel: (styles) => ({
			...styles,
			color: isDarkMode
				? `${indigo.indigo1} !important`
				: `${indigoDark.indigo1} !important`,
		}),
		clearIndicator: (styles) => ({
			...styles,
			color: isDarkMode ? slateDarkA.slateA10 : slateA.slateA10,
		}),
	};

	return (
		<ZRSelect
			{...props}
			styles={styles}
			isDisabled={props?.loading || props?.disabled}
			selectClassName={ZClassNames(props?.selectClassName, {
				'cursor-not-allowed': props?.loading || props?.disabled,
			})}
			placeholder={
				props?.loading ? (
					<ZFlex align={ZRUAlignE.center} gap='2'>
						<ZSpinner /> loading data please wait a second...
					</ZFlex>
				) : (
					props?.placeholder
				)
			}
		/>
	);
};

export default ZRCSelect;
