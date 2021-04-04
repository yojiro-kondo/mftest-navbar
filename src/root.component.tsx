import {
  AppBar,
  CssBaseline,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  makeStyles,
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import React, { useState } from "react";
import * as msal from "@azure/msal-browser";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  offset: theme.mixins.toolbar,
}));
const generateClassName = createGenerateClassName({
  seed: "navbar",
});

export default function Root(props) {
  const [menuToggleState, setMenuToggleState] = useState(true);
  const classes = useStyles();
  const toggleMenu = () => setMenuToggleState(!menuToggleState);
  const MyMsal = new msal.PublicClientApplication({});
  return (
    <>
      <StylesProvider generateClassName={generateClassName}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" onClick={toggleMenu}>
              <Icon className="fa fa-bars"></Icon>
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              single-spa test
            </Typography>
            <IconButton edge="end">
              <Icon className="fa fa-user"></Icon>
              Sign in
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.offset} />
      </StylesProvider>
    </>
  );
}
