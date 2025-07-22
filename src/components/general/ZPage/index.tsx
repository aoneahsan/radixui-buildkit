// #region ---- Core Imports ----
import React, { useMemo } from 'react';
import { ZClassNames } from 'react-buildkit';

// #endregion

// #region ---- Packages Imports ----

// #endregion

// #region ---- Custom Imports ----

// #endregion

// #region ---- Types Imports ----
interface IZPage {
	children?: React.ReactNode;
	className?: string;
}

/**
 * Represents a generic page layout component.
 *
 * @param className - Additional CSS classes to be applied to the page container.
 * @param helmet - Optional metadata for the document head provided through ReactHelmet.
 */
const ZPage: React.FC<IZPage> = ({ children, className }) => {
	const _style = useMemo<React.CSSProperties>(
		() => ({
			width: '100%',
			minHeight: '100vh',
			display: 'flex',
			flexDirection: 'column',
			overflow: 'hidden',
		}),
		[]
	);
	return (
		<div className={ZClassNames(className)} style={_style}>
			{children}
		</div>
	);
};

export default ZPage;
