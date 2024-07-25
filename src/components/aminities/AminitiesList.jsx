import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import lib from "../../assets/lib.svg";
import pool from "../../assets/pool.svg";
import tree from "../../assets/tree.svg";
import cycle from "../../assets/cycle.svg";
import pet from "../../assets/pet.svg";
import ampi from "../../assets/ampi.svg";
import jog from "../../assets/jog.svg";
import ball from "../../assets/ball.svg";

import { useState } from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  aminitiesDiv: {
    display: "flex",
    gap: theme.spacing(1),
    alignItems: "center",
    marginBottom: "10px",
  },

  paraText: {
    fontSize: "13px",
    fontWeight: 200,
    color: "#707070",
    [theme.breakpoints.down("lg")]: {
      fontSize: "10px",
    },
  },

  imageAminities: {
    width: "28px",
    height: "28px",
    [theme.breakpoints.down("lg")]: {
      width: "18px",
      height: "18px",
      marginLeft: "1px",
    },
  },
}));

function AminitiesList(props) {
  const { classes } = useStyles();

  return (
    <Grid container>
      <Grid item md={6}>
        <Box className={classes.aminitiesDiv}>
          <img src={lib} className={classes.imageAminities} alt="lib" />
          <Typography className={classes.paraText}>
            Children's Liberary
          </Typography>
        </Box>
        <Box className={classes.aminitiesDiv}>
          <img src={pool} className={classes.imageAminities} alt="pool" />
          <Typography className={classes.paraText}>Heated Pool</Typography>
        </Box>
        <Box className={classes.aminitiesDiv}>
          <img src={tree} className={classes.imageAminities} alt="aminities" />
          <Typography className={classes.paraText}>Tree Museum</Typography>
        </Box>
        <Box className={classes.aminitiesDiv}>
          <img src={cycle} className={classes.imageAminities} alt="track" />
          <Typography className={classes.paraText}>Cycling track</Typography>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box className={classes.aminitiesDiv}>
          <img src={pet} className={classes.imageAminities} alt="park" />
          <Typography className={classes.paraText}>Pet Park</Typography>
        </Box>
        <Box className={classes.aminitiesDiv}>
          <img src={ampi} className={classes.imageAminities} alt="theater" />
          <Typography className={classes.paraText}>Ampitheare</Typography>
        </Box>
        <Box className={classes.aminitiesDiv}>
          <img src={jog} className={classes.imageAminities} alt="Jog" />
          <Typography className={classes.paraText}>Jogging track</Typography>
        </Box>
        <Box className={classes.aminitiesDiv}>
          <img src={ball} className={classes.imageAminities} alt="Ball" />
          <Typography className={classes.paraText}>
            Basket ball,volley{" "}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default AminitiesList;
