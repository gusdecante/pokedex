import type { NextPage } from "next";
import { useRouter } from "next/router";

import { PokemonDetails } from "../../components";

const Pokemon: NextPage = () => {
  const {
    query: { id },
  } = useRouter();

  return <PokemonDetails pokemonId={id?.toString()} />;
};

export default Pokemon;
