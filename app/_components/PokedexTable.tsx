import React from 'react';
import { Table, TableBody, TableContainer, TableHead, Paper } from '@mui/material';
import PokemonRow from './PokemonRow';
import { StyledTableCell, StyledTableRow } from '../constants/StyledTables';

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
        <StyledTableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Types</StyledTableCell>
            <StyledTableCell>Sprite</StyledTableCell>
          </StyledTableRow>
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