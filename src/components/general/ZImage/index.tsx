// #region ---- Core Imports ----
import React from 'react';

// #endregion

// #region ---- Packages Imports ----
import { ZClassNames } from 'react-buildkit';

// #endregion

// #region ---- Custom Imports ----
import { ZAspectRatio, ZSkeleton } from '@src/components/radixUI';

// #endregion

// #region ---- Types Imports ----
import type { IZImage } from '@src/types/general/ZImage';

// #endregion

const ZImage: React.FC<IZImage> = (props) => {
	return (
		<ZSkeleton
			className={props.skeletonClassName}
			loading={props.loading}
			width={props.width}
			minWidth={props.minWidth}
			maxWidth={props.maxWidth}
			height={props.height}
			minHeight={props.minHeight}
			maxHeight={props.maxHeight}
		>
			<ZAspectRatio ratio={props?.ratio} className={props.aspectRatioClassName}>
				<img
					className={ZClassNames('w-full h-full', props.imgClassName)}
					src={props?.src}
					alt={props?.alt}
				/>
			</ZAspectRatio>
		</ZSkeleton>
	);
};

export default ZImage;
