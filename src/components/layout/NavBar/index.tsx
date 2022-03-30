import React from "react";

import { AppBar, AppBarProps, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

import useStyles from "./styles";

interface NavBar extends AppBarProps {}

const NavBar: React.FC<NavBar> = ({ ...props }) => {
  const classes = useStyles();
  return (
    <AppBar {...props} position="fixed" className={classes.AppBar}>
      <Toolbar>
        <Link href="/">
          <a className={classes.link}>
            <Typography>Pokedex</Typography>
          </a>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
