import { TOGGLE_FAVOURITE } from "./action";

type FavouriteProps = {
  id?: number;
  name?: string;
};

type InitialDataProps = {
  favourites: FavouriteProps[] | any[];
};

const initalData: InitialDataProps = {
  favourites: [],
};

const pokemonReducer = (state = initalData, action: any) => {
  switch (action.type) {
    case TOGGLE_FAVOURITE:
      let pokemonFromFavourite = state.favourites.find(
        (favPokemon) => action.payload.id === favPokemon.id
      );
      return {
        ...state,
        favourites: pokemonFromFavourite
          ? [
              ...state.favourites.filter(
                (pokemon) => pokemon.id !== pokemonFromFavourite.id
              ),
            ]
          : [...state.favourites, action.payload],
      };
    default:
      return state;
  }
};

export default pokemonReducer;
