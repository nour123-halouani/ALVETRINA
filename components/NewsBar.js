import * as React from "react";
import AppBar from "@mui/material/AppBar";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Link } from "@mui/material";
import classes from "../styles/NewsBar.module.scss";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  window: PropTypes.func,
};
export default function NewsBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position="static" sx={{ alignItems: "center" }}>
          <Toolbar variant="dense">
            <Typography className={classes.barLabel} variant="subtitle1">
              A little novelty never bothered anyone!
            </Typography>
            <Link to="/" className={classes.newsLink}>
              Browse our new pieces here.
            </Link>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
}
