import { Navigate, Route, Routes } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { HomePages, PokemonPage, SearchPage } from '../pages';

export const AppRouter = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Navigation />}>
					<Route index element={<HomePages />} />
					<Route path='pokemon/:id' element={<PokemonPage />} />
					<Route path='search' element={<SearchPage />} />
				</Route>
				<Route path='/*' element={<Navigate to='/' />} />
			</Routes>
		</div>
	);
};
