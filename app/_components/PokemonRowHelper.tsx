"use client";

import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { trpc } from '../_trpc/client';
import PokemonRow from "./PokemonRow";

const PokemonRowHelper: React.FC = () => {
  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState<any>(null);

  const getPokemon = trpc.getPokemon.useQuery(name, {
    enabled: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await getPokemon.refetch();
    setPokemon(result.data);
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <TextField
          label="Pokemon Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginRight: '10px' }}
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
      {pokemon && <PokemonRow pokemon={pokemon} />}
    </>
  );
};

export default PokemonRowHelper;