import React from 'react';
import { TopNav, Footer } from '../components';

/**
 *  A wrapper sandwhich that includes a navbar and footer as buns
 */
export default function MainLayout({ pageName, children }) {
	return (
		<div id={`${pageName}-page`}>
			<TopNav />
			{children}
			<Footer />
		</div>
	);
}
