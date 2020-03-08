import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Grid, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import zIndex from "@material-ui/core/styles/zIndex";
//"M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
export const Header: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      // className={classes.headerContainer}
      wrap={"nowrap"}
    >
      <div className={classes.container}>
        <svg viewBox="0 50 500 500" className={classes.svg}>
          <path
            d="M0,55 C150,200 400,0 500,100 L500,00 L0,0"
            style={{
              fill: "#2C6975"
            }}
          ></path>
        </svg>
      </div>
      <Grid item>
        <Link to="/">
          <MenuItem className={classes.headerLink}>Home</MenuItem>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/about">
          <MenuItem className={classes.headerLink}>About</MenuItem>
        </Link>
      </Grid>
      <Grid item>
        <Link to="/users">
          <MenuItem className={classes.headerLink}>Users</MenuItem>
        </Link>
      </Grid>
      <Grid
        container
        item
        xs={12}
        direction="row"
        alignContent={"center"}
        justify={"flex-end"}
      >
        <div style={{ color: "black", marginRight: "10px" }}>TEST</div>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles({
  headerContainer: {
    textDecoration: "none",
    background: "linear-gradient(45deg, #CDE0C9 30%, #2C6975 90%)",
    padding: "5px 0 5px 0"
    // boxShadow: "0 3px 5px 2px rgba(200, 200, 200, .3)"
  },
  headerLink: {
    color: "#ffffff",
    padding: "0 20px"
  },
  svg: {
    background: "linear-gradient(45deg, #CDE0C9 30%, #2C6975 90%)",
    display: "inline-block",
    position: "absolute",
    top: 0,
    left: 0
  },
  container: {
    background: "linear-gradient(45deg, #CDE0C9 30%, #2C6975 90%)",
    display: "inline-block",
    position: "absolute",
    width: "100%",
    height: "10px",
    paddingBottom: "100%",
    verticalAlign: "middle",
    overflow: "hidden",
    zIndex: -20
  }
});
