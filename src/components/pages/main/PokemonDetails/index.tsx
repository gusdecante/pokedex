import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { POKEMON_API_URL } from "../../../../core/config";
import axios from "axios";

const PokemonDetails: React.FC = () => {
  const router = useRouter();
  const [pokemon, setPokemon] = useState<any>();
  const { id } = router.query;
  useEffect(() => {
    axios.get(`${POKEMON_API_URL}/${id}`).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setPokemon(response.data);
      }
    });
  });

  return (
    <div style={{ marginTop: "5rem" }}>
      <div>{id}</div>
    </div>
  );
};

export default PokemonDetails;
