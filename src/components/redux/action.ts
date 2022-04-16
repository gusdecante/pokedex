export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";

export const toggleFavourite = (pokemon: any) => ({
  type: TOGGLE_FAVOURITE,
  payload: pokemon,
});
