import React, { ReactNode } from "react";

import { Grid, GridProps, Typography } from "@mui/material";

import { useStyles } from "./styles";

interface ICustomGridItem extends GridProps {
  button?: ReactNode;
}

const CustomGridItem: React.FC<ICustomGridItem> = ({
  children,
  button,
  ...props
}) => {
  const { classes } = useStyles();
  return (
    <Grid item {...props}>
      {button ? (
        button
      ) : (
        <Typography className={classes.text}>{children}</Typography>
      )}
    </Grid>
  );
};

export default CustomGridItem;
