import { PokemonContext } from './PokemonContext';

export const PokemonProvider = (children) => {
  return (
		<PokemonContext.Provider
			value={{
				/* valueSerach,
				onInputChange,
				onResetForm,
				allPokemons,
				globalPokemons,
				getPokemonByID, */
			}}>
			{children}
		</PokemonContext.Provider>
	);
}
