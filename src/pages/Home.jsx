import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { HomeHero } from '../components';

export default function Home () {
	return (
		<MainLayout pageName='home'>


			<HomeHero />
		</MainLayout>
	);
}
