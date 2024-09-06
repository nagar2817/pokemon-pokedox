"use client";
import React, { useState, useEffect, useCallback } from "react";
import { trpc } from "../_trpc/client";
import PokemonTypeSelection from "./PokemonTypeSelection";
import PokemonTable from "./PokedexTable";
import { Pagination, Box } from "@mui/material";

const FilterablePokedexTable: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>("water");
  const [pokemonArray, setPokemonArray] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const take = 10; // Number of items per page

  const getPokemonByType = trpc.getPokemonByType.useQuery(
    {
      type: selectedType || "",
      skip: (page - 1) * take,
      take,
    },
    {
      enabled: false,
    }
  );

  const fetchData = useCallback(async () => {
    if (selectedType !== undefined) {
      const result = await getPokemonByType.refetch();
      setPokemonArray(result.data?.pokemon || []);
      const total = result.data?.total || 0;
      setTotalPages(Math.ceil(total / take));
    } else {
      setPokemonArray([]);
      setTotalPages(1);
    }
  }, [selectedType, page, getPokemonByType]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleTypeChange = (type: string | undefined) => {
    setSelectedType(type);
    setPage(1); // Reset page when type changes
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <div>
      <PokemonTypeSelection
        selectedType={selectedType}
        selectType={handleTypeChange}
      />
      {pokemonArray.length > 0 && (
        <>
          <PokemonTable pokemonArray={pokemonArray} />
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

export default FilterablePokedexTable;
