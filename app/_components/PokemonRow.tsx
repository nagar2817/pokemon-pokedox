// components/PokemonRow.tsx
import React from 'react';
import { TableCell, ImageList, ImageListItem, TableRow,styled } from '@mui/material';

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
                <img src={pokemon.sprite} alt={pokemon.name} style={{ maxWidth: '100px' }} />
              </TableCell>
      </StyledTableRow>
    // <>
    //  <TableRow key={pokemon.id}>
    //   <TableCell>{pokemon.id}</TableCell>
    //   <TableCell>{pokemon.name}</TableCell>
    //   <TableCell>{pokemon.types.join(', ')}</TableCell>
    //   <TableCell>
    //     <ImageList cols={1}>
    //       <ImageListItem>
    //         <img src={pokemon.sprite} alt={pokemon.name} />
    //       </ImageListItem>
    //     </ImageList>
    //   </TableCell>
    //   </TableRow>
    // </>
  );
};

export default PokemonRow;