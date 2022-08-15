import React from 'react';
import EmptyLayout from '../../layouts/EmptyLayout';


/**
 *  Displays when a 404 page is encountered
 */
export default function Error404() {
	return (
		<EmptyLayout pageName="error404">
			<h1>Error 404</h1>
		</EmptyLayout>
	)
}
