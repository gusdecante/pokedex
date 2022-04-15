import React from "react";

import { CircularProgress } from "@mui/material";

import { useStyles } from "./styles";

export const CustomCircularProgress: React.FC = () => {
  const { classes } = useStyles();
  return <CircularProgress className={classes.circularProgressRoot} />;
};
