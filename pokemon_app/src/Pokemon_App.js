// Pokemon url "https://pokeapi.co/api/v2/pokemon?limit=100"

import React, { useState, useEffect } from 'react';

const PokemonApp = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [pokemonDetails, setPokemonDetails] = useState(null);

  // Fetching the list of Pokémon names
  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');  // Get first 100 Pokémon
        const data = await response.json();
        setPokemonList(data.results); // Set list of Pokémon names
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    };

    fetchPokemonList();
  }, []);

  // Fetching details of the selected Pokémon
  const fetchPokemonDetails = async (pokemonName) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
      setPokemonDetails(data); // Set the details of the selected Pokémon
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const handleShowDetails = () => {
    if (selectedPokemon) {
      fetchPokemonDetails(selectedPokemon);
    }
  };

  return (
    <div className="container">
      <h1>Get to know about Pokemons</h1>
      
      {/* Dropdown for Pokémon names */}
      <select onChange={handleSelectChange} value={selectedPokemon}>
        <option value="">Select</option>
        {pokemonList.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      
      <button onClick={handleShowDetails}>Show Details</button>

      {/* Display Pokémon details */}
      {pokemonDetails && (
        <div>
          <h3>{pokemonDetails.name}</h3>
          <p>Height: {pokemonDetails.height} dm</p>
          <p>Weight: {pokemonDetails.weight} hectograms</p>
        </div>
      )}
    </div>
  );
};

export default PokemonApp;
