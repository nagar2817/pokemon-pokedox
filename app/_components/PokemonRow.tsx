// components/PokemonRow.tsx
import React from 'react';
import Image from 'next/image';
import { StyledTableCell, StyledTableRow } from '../constants/StyledTables';

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
      <StyledTableCell>{pokemon.id}</StyledTableCell>
      <StyledTableCell>{pokemon.name}</StyledTableCell>
      <StyledTableCell>{pokemon.types.join(', ')}</StyledTableCell>
      <StyledTableCell>
        <Image src={pokemon.sprite} alt={pokemon.name} width={100} height={100} />
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default PokemonRow;