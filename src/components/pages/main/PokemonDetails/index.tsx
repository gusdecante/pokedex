import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Favorite as FavoriteIcon } from "@mui/icons-material";

import axios from "axios";

import { POKEMON_API_URL } from "../../../../core/config";
import { CustomCircularProgress } from "../../../";
import { PokemonShape } from "../../interface/PokemonShape";

import { CustomCardFlip, CustomGridItem } from "../../../";

import { useStyles } from "./styles";

type PokemonDetailsProps = {
  pokemonId?: string;
};

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ pokemonId }) => {
  const { classes } = useStyles();
  const [pokemon, setPokemon] = useState<PokemonShape>();

  useEffect(() => {
    axios
      .get(`${POKEMON_API_URL}/${Number(pokemonId) + 1}`)
      .then(({ data, status }) => {
        console.log(data);
        if (status >= 200 && status < 300) {
          setPokemon(data);
        }
      });
  }, [pokemonId]);

  const favouriteChecker = (pokemon: any) => {
    let found = true;

    return found;
  };

  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);

  return pokemon ? (
    <Box className={classes.pokedexDetailsRoot}>
      <Typography variant="h1">{pokemon.name}</Typography>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <Box className={classes.pokemonInfoContainer}>
        <hr />
        <Grid container>
          <CustomGridItem
            md={2}
            button={
              <Button className={classes.favouriteButton} onClick={() => {}}>
                <FavoriteIcon
                  className={
                    favouriteChecker(pokemon) ? classes.isFavouriteIcon : ""
                  }
                />
              </Button>
            }
          />
          <CustomGridItem md={2}>
            Name
            <br />
            {pokemon.name}
          </CustomGridItem>
          <CustomGridItem md={2}>
            Height
            <br />
            {pokemon.height}m
          </CustomGridItem>
          <CustomGridItem md={2}>
            Weight
            <br />
            {pokemon.weight}kg
          </CustomGridItem>
          {pokemon.types.map(({ type }, index) => {
            const { name } = type;
            return (
              <CustomGridItem key={index} md={2}>
                Type
                <br />
                {name}
              </CustomGridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  ) : (
    <CustomCircularProgress />
  );
};

export default PokemonDetails;
