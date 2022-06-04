import React from "react";

import { PokemonCard } from "../PokemonCard/PokemonCard";

import { CustomCircularProgress } from "../../..";

import { Container, Grid } from "@mui/material";

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
    <Container className={classes.pokedexContainer}>
      {pokemons ? (
        <Grid
          container
          spacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 1 }}
          xs={16}
          sm={16}
          md={16}
          lg={16}
          xl={16}
          justifyContent="center"
        >
          {pokemons.map(({ id, name, url }) => (
            <Grid key={id} item xs={16} sm={16} md={3} lg={4} xl={16}>
              <PokemonCard id={id} name={name} image={url} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CustomCircularProgress />
      )}
    </Container>
  );
};
