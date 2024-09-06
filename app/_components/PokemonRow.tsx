// components/PokemonRow.tsx
import React from 'react';
import Image from 'next/image';
import { TableCell} from '@mui/material';
import { StyledTableRow } from '../constants/StyledTables';

type PokemonRowProps = {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  };
};

const PokemonRow: React.FC<PokemonRowProps> = ({ pokemon }) => {
  return (
    <StyledTableRow key={pokemon.id}>
      <TableCell>{pokemon.id}</TableCell>
      <TableCell>{pokemon.name}</TableCell>
      <TableCell>{pokemon.types.join(', ')}</TableCell>
      <TableCell>
        <Image src={pokemon.sprite} alt={pokemon.name} width={100} height={100} />
      </TableCell>
    </StyledTableRow>
  );
};

export default PokemonRow;