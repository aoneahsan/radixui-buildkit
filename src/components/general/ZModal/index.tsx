// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----
import { Dialog } from '@radix-ui/themes';

// #endregion

// #region ---- Custom Imports ----
import { ZRUColorE } from '@enums/radixUI';
import { ZDialog, ZFlex, ZText } from '@src/components/radixUI';

// #endregion

// #region ---- Types Imports ----

// #endregion

// #region ---- Store Imports ----

// #endregion

// #region ---- Images Imports ----
import { ZCloseSvg } from '@src/assets';
import { useZMediaQueryScale, ZClassNames } from 'react-buildkit';

// #endregion
interface ZModalI {
	children: React.ReactNode;
	open?: boolean;
	className?: string;
	titleClassName?: string;
	title?: string;
	disableCrossBtn?: boolean;
	modalDescription?: string;
	onOpenChange?: (open: boolean) => void;
	crossOnClick?: React.MouseEventHandler<SVGSVGElement>;
}

const ZModal: React.FC<ZModalI> = ({
	children,
	className,
	titleClassName,
	open,
	disableCrossBtn = false,
	title = 'Title here',
	onOpenChange,
	crossOnClick,
	modalDescription = 'modal',
}) => {
	const { isSmScale } = useZMediaQueryScale();
	return (
		<ZDialog
			open={open}
			className={className}
			onOpenChange={onOpenChange}
			aria-describedby={modalDescription}
		>
			<ZFlex
				className={ZClassNames('mb-5', {
					'flex-col-reverse gap-2': !isSmScale,
					'items-center justify-between': isSmScale,
				})}
			>
				<Dialog.Title
					className={ZClassNames(titleClassName, 'mb-0', {
						'text-[1.7rem]': isSmScale,
						'text-[1.4rem]': !isSmScale,
					})}
				>
					{title}
				</Dialog.Title>

				<ZText color={disableCrossBtn ? ZRUColorE.gray : undefined}>
					<ZCloseSvg
						className={ZClassNames('w-6 h-6 text-inherit', {
							'cursor-not-allowed': disableCrossBtn,
							'cursor-pointer': !disableCrossBtn,
							'ms-auto': !isSmScale,
						})}
						onClick={(e) => !disableCrossBtn && crossOnClick && crossOnClick(e)}
					/>
				</ZText>
			</ZFlex>
			{children}
		</ZDialog>
	);
};

export default ZModal;
