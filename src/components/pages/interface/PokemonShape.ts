type PokemonAbilityProps = {
  ability: { name: string; url: string };
};

export type PokemonTypeProps = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export interface PokemonShape {
  name: string;
  height: number;
  weight: number;
  abilities: PokemonAbilityProps[];
  sprites: { front_default: string };
  types: PokemonTypeProps[];
}
