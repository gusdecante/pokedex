import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Router from "next/router";

import { useStyles } from "./styles";

interface IPokeomnCard {
  id: number;
  name: string;
  image: string;
}

export const PokemonCard: React.FC<IPokeomnCard> = ({ id, name, image }) => {
  const { classes } = useStyles();

  return (
    <Card
      className={classes.cardRoot}
      onClick={() => Router.push(`pokemon/${id}`)}
    >
      <CardMedia className={classes.cardMedia} image={image} />
      <CardContent>
        <Typography className={classes.cardContent}>{name}</Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
