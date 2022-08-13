import './scss/main.scss';
import { Home, Error404 } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
	return (
		<>
			<BrowserRouter basename='/'>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='*' element={<Error404 />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
