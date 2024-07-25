import React from "react";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme) => ({
  heightMap: {
    height: "100%",
    borderRadius: "10px",
    [theme.breakpoints.down("md")]: {
      height: "300%",
      borderRadius: "2px",
    },
  },
}));

function Map(props) {
  const { classes } = useStyles();

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d124386.63135162905!2d77.90720954910886!3d13.030435373142542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721897890764!5m2!1sen!2sin"
      width="100%"
      className={classes.heightMap}
      style={{ border: 0, display: "block" }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default Map;
