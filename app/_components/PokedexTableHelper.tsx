"use client";
import React, { useState, useEffect, useCallback } from "react";
import { TextField, Button, Box, Pagination } from "@mui/material";
import { trpc } from "../_trpc/client";
import PokedexTable from "./PokedexTable";

const PokemonTableHelper: React.FC = () => {
  const [names, setNames] = useState("");
  const [pokemonArray, setPokemonArray] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const take = 10; // Number of items per page

  // Use the useQuery hook correctly
  const getPokemonArray = trpc.getPokemonArray.useQuery(
    {
      names: names.split(",").map((name) => name.trim()),
      skip: (page - 1) * take,
      take,
    },
    {
      enabled: false,
    }
  );

  const fetchData = useCallback(async () => {
    if (names) {
      const result = await getPokemonArray.refetch();
      setPokemonArray(result.data?.pokemon || []);
      const total = result.data?.total || 0;
      setTotalPages(Math.ceil(total / take));
    } else {
      setPokemonArray([]);
      setTotalPages(1);
    }
  }, [names, page]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("name", names);
    setPage(1); // Reset page to 1 when new names are submitted
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
      >
        <TextField
          label="Pokemon Names (comma separated)"
          value={names}
          onChange={(e) => setNames(e.target.value)}
          sx={{ marginRight: "10px" }}
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>
      {pokemonArray.length > 0 && (
        <>
          <PokedexTable pokemonArray={pokemonArray} />
          <Box display="flex" justifyContent="center" mt={2}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
            />
          </Box>
        </>
      )}
    </div>
  );
};

export default PokemonTableHelper;
