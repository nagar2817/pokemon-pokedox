import axios from "axios";
import prisma from "../db";

async function fetchPokemonData(limit: number) {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );
  return response.data.results;
}

async function fetchPokemonDetails(url: string) {
  const response = await axios.get(url);
  const pokemon = response.data;
  return {
    name: pokemon.name,
    types: pokemon.types.map((type: any) => type.type.name),
    sprite: pokemon.sprites.front_default,
  };
}

async function seedPokemon(limit: number) {
  const pokemonData = await fetchPokemonData(limit);
  const pokemonDetails = await Promise.all(
    pokemonData.map(async (pokemon: any) => {
      return fetchPokemonDetails(pokemon.url);
    })
  );

  for (const pokemon of pokemonDetails) {
    console.log("pokemon name", pokemon.name);
    await prisma.pokemon.create({
      data: {
        name: pokemon.name,
        types: pokemon.types,
        sprite: pokemon.sprite,
      },
    });
  }
}

seedPokemon(200)
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
