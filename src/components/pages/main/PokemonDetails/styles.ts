import { makeStyles } from "tss-react/mui";
import { Theme } from "@mui/material";

export const useStyles = makeStyles()((theme: Theme) => ({
  pokedexDetailsRoot: {
    "&.MuiBox-root": {
      height: "80vh",
      backgroundColor: "black",
      color: "white",
      marginTop: "75px",
      textAlign: "center",
      borderRadius: "5px",
      paddingTop: "30px",
      "& .MuiTypography-root": {
        textTransform: "uppercase",
        fontFamily: "fantasy",
      },
      "& img": {
        width: "170px",
        height: "170px",
      },
    },
  },
  pokemonInfoContainer: {
    "&.MuiBox-root": {
      bottom: 60,
      position: "absolute",
      width: "100%",
      "& hr": {
        height: "0.01mm",
        width: "95%",
      },
    },
  },
  favouriteButton: {
    "&.MuiButtonBase-root.MuiButton-root": {
      color: "white",
      height: "50px",
      width: "50px",
      marginTop: "1rem",
      "& .MuiSvgIcon-root": {
        fontSize: "2.25rem",
      },
    },
  },
  isFavouriteIcon: {
    "&.MuiSvgIcon-root": {
      fontSize: "2.25rem",
      color: "red",
    },
  },
}));
