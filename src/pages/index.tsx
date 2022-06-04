import { GetStaticProps } from "next";
import type { NextPage } from "next";

import { Pokedex } from "../components";
import axios from "axios";
import { IMAGE_API_URL, POKEMON_API_URL } from "../core/config";
import { PokemonDataProps } from "../components/pages/main/Pokedex/Pokedex";

type Props = {
  author: string;
  pokemons: PokemonDataProps[];
};

const Home: NextPage<Props> = ({ author, pokemons }) => {
  return (
    <div>
      <Pokedex pokemons={pokemons} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { data } = await axios.get(`${POKEMON_API_URL}?limit=100`);

  const copyResult = data.results;

  const pokemons: PokemonDataProps[] = copyResult.map(
    (pokemon: any, index: number) => ({
      id: index,
      url: `${IMAGE_API_URL}${index + 1}.png`,
      name: pokemon.name,
    })
  );

  return {
    props: {
      author: "gusdecante",
      pokemons,
    },
    revalidate: 60 * 60 * 60 * 24,
  };
};

export default Home;
