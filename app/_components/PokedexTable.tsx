import React from 'react';
import { Table,TableRow, TableBody, TableContainer, TableHead, Paper } from '@mui/material';
import PokemonRow from './PokemonRow';
import { StyledTableCell } from '../constants/StyledTables';

type PokedexTableProps = {
  pokemonArray: {
    id: number;
    name: string;
    types: string[];
    sprite: string;
  }[];
};

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
            <PokemonRow pokemon={pokemon} key={pokemon.id}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PokedexTable;