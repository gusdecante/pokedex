import React, { useEffect, useState } from "react";

import { POKEMON_API_URL } from "../../../../core/config";
import { CustomCircularProgress } from "../../../";

import axios from "axios";

type PokemonDetailsProps = {
  pokemonId?: string;
};

export const PokemonDetails: React.FC<PokemonDetailsProps> = ({
  pokemonId,
}) => {
  const [pokemon, setPokemon] = useState<any>();
  useEffect(() => {
    axios.get(`${POKEMON_API_URL}/${pokemonId}`).then((response) => {
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        setPokemon(response.data);
      }
    });
  }, []);

  return pokemon ? <CustomCircularProgress /> : <CustomCircularProgress />;
};
