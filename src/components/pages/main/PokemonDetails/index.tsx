import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Box, Typography, Grid, Button } from "@mui/material";
import { Favorite as FavoriteIcon } from "@mui/icons-material";

import axios from "axios";

import { POKEMON_API_URL } from "../../../../core/config";
import { CustomCircularProgress } from "../../../";
import { PokemonShape } from "../../interface/PokemonShape";

import { useStyles } from "./styles";
import { toggleFavourite } from "../../../redux/action";

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

  return pokemon ? (
    <Box>
      <Box className={classes.pokedexDetailsRoot}>
        <Typography variant="h1">{pokemon.name}</Typography>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <Box className={classes.pokemonInfoContainer}>
          <hr />
          <Grid container>
            <Grid item md={1}>
              <Button
                className={classes.favouriteButton}
                onClick={() => toggleFavourite(pokemon)}
              >
                <FavoriteIcon
                  className={
                    favouriteChecker(pokemon) ? classes.isFavouriteIcon : ""
                  }
                />
              </Button>
            </Grid>
            <Grid item md={2}>
              <Typography className={classes.text}>
                Name
                <br />
                {pokemon.name}
              </Typography>
            </Grid>
            <Grid item md={2}>
              <Typography className={classes.text}>
                Height
                <br />
                {pokemon.height}m
              </Typography>
            </Grid>
            <Grid item md={2}>
              <Typography className={classes.text}>
                Weight
                <br />
                {pokemon.weight}kg
              </Typography>
            </Grid>
            {pokemon.types.map(({ type }, index) => {
              const { name } = type;
              return (
                <Grid key={index} item md={2}>
                  <Typography className={classes.text}>
                    Type
                    <br />
                    {name}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  ) : (
    <CustomCircularProgress />
  );
};

const mapStateToProps = (state: any) => ({
  favourite: state.favourite,
});

const mapDispatchToProps = (dispatch: any) => ({
  tooggleFavourite: (pokemon: any) => dispatch(toggleFavourite(pokemon)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
