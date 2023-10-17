import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PokemonContext = createContext();

const PokemonContextProvider = ({ children }) => {
  const [pokemonNames, setPokemonNames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
        const data = response.data;
        const names = data.results.map((pokemon) => pokemon.name);
        setPokemonNames(names);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <PokemonContext.Provider value={pokemonNames}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
