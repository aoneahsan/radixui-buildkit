import { useThemeContext } from '@radix-ui/themes';
import { ZBox, ZSpinner } from '@src/components/radixUI';
import React, { useMemo } from 'react';
import { ZClassNames } from 'react-buildkit';
import './styles.css';

const FullPageLoader: React.FC = () => {
	const radixThemeContext = useThemeContext();
	const isDarkMode = useMemo(
		() => radixThemeContext.appearance === 'dark',
		[radixThemeContext.appearance]
	);

	return (
		<ZBox className='absolute top-0 left-0 z-50 flex justify-center w-full h-full pt-16'>
			<ZBox
				className={ZClassNames('absolute top-0 left-0 w-full h-full', {
					'bg-indigo5/20': isDarkMode,
					'bg-gray12/30': !isDarkMode,
				})}
			/>
			<ZSpinner
				className={ZClassNames('w-8 h-8', {
					'text-indigo12': !isDarkMode,
				})}
			/>
		</ZBox>
	);
};
export default FullPageLoader;
