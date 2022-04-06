import React from "react";

import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

import useStyles from "./styles";

interface IPokeomnCard {
  id: number;
  name: string;
  image: string;
}

export const PokemonCard: React.FC<IPokeomnCard> = ({ id, name, image }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={2}>
      <Card className={classes.cardRoot}>
        <CardMedia className={classes.cardMedia} image={image} />
        <CardContent>
          <Typography className={classes.cardContent}>{name}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
