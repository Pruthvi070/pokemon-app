/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Card.css";

const typeColors = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <div className="pokemon-image">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="pokemon-info">
        <h2>{pokemon.name}</h2>
        <div className="pokemon-types">
          {pokemon.types.map((type) => (
            <span
              key={type.type.name}
              className="type-badge"
              style={{ backgroundColor: typeColors[type.type.name] }}
            >
              {type.type.name}
            </span>
          ))}
        </div>
        <div className="pokemon-stats">
          <div className="stat-row">
            <span>HP: {pokemon.stats[0].base_stat}</span>
            <span>Attack: {pokemon.stats[1].base_stat}</span>
          </div>
          <div className="stat-row">
            <span>Defense: {pokemon.stats[2].base_stat}</span>
            <span>Speed: {pokemon.stats[5].base_stat}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
