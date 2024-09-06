"use client"
import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box, Typography } from '@mui/material';

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({ selectedType, selectType }) => {
  const types = ['grass', 'fire', 'water', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy','normal', 
                  'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel'];

  return (
    <Box display="flex" alignItems="center">
      <Typography variant="h6" sx={{ marginRight: '1rem', marginBottom:'1rem' }}>
        Select Type:
      </Typography>
      <FormControl sx={{marginBottom: "1rem"}} >
        <Select
          value={selectedType || ''}
          onChange={(e) => selectType(e.target.value as string)}
        >
          <MenuItem value="">All</MenuItem>
          {types.map((type) => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PokemonTypeSelection;