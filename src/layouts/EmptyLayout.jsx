import React from 'react';

/**
 *  A layout without a navbar and footer
 */
export default function EmptyLayout({ pageName, children }) {
	return (
		<div id={`${pageName}-page`}>
			{children}
		</div>
	);
}
