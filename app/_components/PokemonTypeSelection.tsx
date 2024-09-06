"use client";
import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  Box,
  Typography,
} from "@mui/material";
import { pokemonTypes } from "../constants/PokemonTypes";

type PokemonTypeSelectionProps = {
  selectedType: string | undefined;
  selectType: (type: string | undefined) => void;
};

const PokemonTypeSelection: React.FC<PokemonTypeSelectionProps> = ({
  selectedType,
  selectType,
}) => {
  return (
    <Box display="flex" alignItems="center">
      <Typography
        variant="h6"
        sx={{ marginRight: "1rem", marginBottom: "1rem" }}
      >
        Select Type:
      </Typography>
      <FormControl sx={{ marginBottom: "1rem" }}>
        <Select
          value={selectedType || ""}
          onChange={(e) => selectType(e.target.value as string)}
        >
          {pokemonTypes.map((type) => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PokemonTypeSelection;