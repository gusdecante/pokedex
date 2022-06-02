import React, { useEffect, useState } from "react";

import { Box, BoxProps, CircularProgress, Grid } from "@mui/material";

import { POKEMON_API_URL, IMAGE_API_URL } from "../../../../core/config";

import { PokemonCard } from "../PokemonCard";

import { CustomCircularProgress } from "../../../";

import axios from "axios";

import { useStyles } from "./styles";

type PokemonDataProps = {
  id: number;
  url: string;
  name: string;
};

export const Pokedex: React.FC<BoxProps> = ({ ...props }) => {
  const { classes } = useStyles();
  const [pokemonList, setPokemonList] = useState<any>();
  useEffect(() => {
    axios.get(`${POKEMON_API_URL}?limit=100`).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        const { results } = response.data;
        let newPokemonData: PokemonDataProps[] = [];
        results.forEach((pokemon: any, index: number) => {
          let pokemonObject = {
            id: index,
            url: `${IMAGE_API_URL}${index + 1}.png`,
            name: pokemon.name,
          };
          newPokemonData.push(pokemonObject);
        });
        setPokemonList(newPokemonData);
      }
    });
  }, []);

  return (
    <Box {...props} className={classes.pokedexRoot}>
      {pokemonList ? (
        <Grid className={classes.pokedexGridContainer} container spacing={2}>
          {pokemonList.map((pokemon: any) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.url}
            />
          ))}
        </Grid>
      ) : (
        <CustomCircularProgress />
      )}
    </Box>
  );
};
