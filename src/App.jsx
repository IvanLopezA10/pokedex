import { AppRouter } from './routes/AppRouter';
import './App.css';
import { PokemonProvider } from './context/PokemonProvider';

export const App = () => {
	return (
		<PokemonProvider>
			<AppRouter />
		</PokemonProvider>
	);
};
