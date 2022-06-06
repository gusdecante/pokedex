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

export type FrontDefaultImagesProps = {
  front_default: string;
};

export interface PokemonShape {
  name: string;
  height: number;
  weight: number;
  abilities: PokemonAbilityProps[];
  sprites: FrontDefaultImagesProps;
  types: PokemonTypeProps[];
  base_experience: number;
  category: string;
}
