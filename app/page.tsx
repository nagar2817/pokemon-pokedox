import React from "react";
import PokemonRowHelper from "./_components/PokemonRowHelper";
import PokemonTableHelper from "./_components/PokedexTableHelper";
import FilterablePokedexTable from "./_components/FilterablePokedexTable";
import styles from "./page.module.css";
import { Container, Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <Container maxWidth="md">
        <Box className={styles.section}>
          <Typography variant="h4" className={styles.title} sx={{marginBottom: '1rem'}}>
            Single Pokemon Search
          </Typography>
          <PokemonRowHelper />
        </Box>
        <Box className={styles.section}>
          <Typography variant="h4" className={styles.title} sx={{marginBottom: '1rem'}}>
            Multiple Pokemon Search
          </Typography>
          <PokemonTableHelper />
        </Box>
        <Box className={styles.section}>
          <Typography variant="h4" className={styles.title} sx={{marginBottom: '1rem'}}>
            Filterable Pokedex Table
          </Typography>
          <FilterablePokedexTable />
        </Box>
      </Container>
    </main>
  );
}