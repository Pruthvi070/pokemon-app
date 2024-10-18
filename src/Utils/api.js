import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

export const fetchPokemons = async (limit = 20, offset = 0) => {
    const response = await api.get(`/?limit=${limit}&offset=${offset}`);
    return response.data;
};

export const fetchPokemonDetails = async (name) => {
    const response = await api.get(`/${name}`);
    return response.data;
};