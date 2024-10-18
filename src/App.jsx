/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// src/App.jsx
// src/App.jsx
import React, { useState, useEffect } from 'react';
import PokemonList from './components/PokemonList';
import { fetchPokemons, fetchPokemonDetails } from './Utils/api';
import './App.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchTerm) => {
    if (searchTerm.trim() === '') {
      fetchInitialPokemons();
      return;
    }

    setLoading(true);
    try {
      const pokemon = await fetchPokemonDetails(searchTerm.toLowerCase());
      setPokemons([pokemon]);
    } catch (error) {
      console.error('Error searching for Pokémon:', error);
      setPokemons([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchInitialPokemons = async () => {
    setLoading(true);
    try {
      const data = await fetchPokemons();
      const detailedPokemons = await Promise.all(
        data.results.map(async pokemon => await fetchPokemonDetails(pokemon.name))
      );
      setPokemons(detailedPokemons);
    } catch (error) {
      console.error('Error fetching initial Pokémon:', error);
      setPokemons([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialPokemons();
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>Pokédex</h1>
          <p>Your ultimate Pokémon information source</p>
        </div>
      </header>
      <main>
        <PokemonList pokemons={pokemons} onSearch={handleSearch} />
        {loading && <p className="loading">Loading...</p>}
      </main>
    </div>
  );
};

export default App;