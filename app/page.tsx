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
          <Typography variant="h4" className={styles.title}>
            Single Pokemon Search
          </Typography>
          <PokemonRowHelper />
        </Box>
        <Box className={styles.section}>
          <Typography variant="h4" className={styles.title}>
            Multiple Pokemon Search
          </Typography>
          <PokemonTableHelper />
        </Box>
        <Box className={styles.section}>
          <Typography variant="h4" className={styles.title}>
            Filterable Pokedex Table
          </Typography>
          <FilterablePokedexTable />
        </Box>
      </Container>
    </main>
  );
}