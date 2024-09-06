import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled } from '@mui/material';
import PokemonRow from './PokemonRow';

type PokedexTableProps = {
  pokemonArray: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  }[];
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

const PokedexTable: React.FC<PokedexTableProps> = ({ pokemonArray }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Types</StyledTableCell>
            <StyledTableCell>Sprite</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemonArray.map((pokemon) => (
            <PokemonRow pokemon={pokemon}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PokedexTable;