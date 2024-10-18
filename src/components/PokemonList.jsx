/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PokemonCard from './PokemonCard';
import PokemonSearch from './PokemonSearch';
import './List.css';

const PokemonList = ({ pokemons, onSearch }) => {
  return (
    <div className="pokemon-list-container">
      <PokemonSearch onSearch={onSearch} />
      <div className="pokemon-list">
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;