import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  AppBarProps,
  Toolbar,
  Typography,
  FormGroup,
  FormControlLabel,
  Switch,
  Container,
} from "@mui/material";
import {
  LightMode as LightModeIcon,
  Nightlight as NightlightIcon,
} from "@mui/icons-material";

import { useStyles } from "./styles";

interface NavBar extends AppBarProps {}

const NavBar: React.FC<NavBar> = ({ ...props }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { classes } = useStyles({ color: isDarkMode ? "dark" : "light" });
  const labelMode = isDarkMode ? "Dark" : "Light";
  return (
    <AppBar {...props} className={classes.appBarRoot}>
      <Toolbar className={classes.toobarRoot}>
        <Link href="/">
          <a className={classes.link}>
            <Typography className={classes.title}>
              Poke<span>dex</span>
            </Typography>
          </a>
        </Link>
        <Container
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <FormGroup>
            <FormControlLabel
              label={`${labelMode} Mode`}
              control={
                <Switch
                  defaultChecked={isDarkMode}
                  onClick={() => setIsDarkMode(!isDarkMode)}
                />
              }
            />
          </FormGroup>
          {isDarkMode ? <NightlightIcon /> : <LightModeIcon />}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
