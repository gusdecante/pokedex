import React from "react";

import { PokemonCard } from "../PokemonCard/PokemonCard";

import { CustomCircularProgress } from "../../..";

import { Box, Grid } from "@mui/material";

import { useStyles } from "./styles";

export type PokemonDataProps = {
  id: number;
  url: string;
  name: string;
};

interface PokedexShape {
  pokemons?: PokemonDataProps[];
}

export const Pokedex: React.FC<PokedexShape> = ({ pokemons }) => {
  const { classes } = useStyles();

  return (
    <Box className={classes.pokedexRoot}>
      {pokemons ? (
        <Grid className={classes.pokedexGridContainer} container spacing={2}>
          {pokemons.map(({ id, name, url }) => (
            <PokemonCard key={id} id={id} name={name} image={url} />
          ))}
        </Grid>
      ) : (
        <CustomCircularProgress />
      )}
    </Box>
  );
};
