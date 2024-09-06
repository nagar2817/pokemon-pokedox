// components/PokemonRow.tsx
import React from 'react';
import { TableCell, TableRow, styled } from '@mui/material';
import Image from 'next/image';

type PokemonRowProps = {
  pokemon: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  };
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
  // Reduce gap between rows
  '& > *': {
    padding: '8px', // Adjust padding to reduce gap
  },
}));

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