import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import hero from "../../assets/heroImage.svg";
import oneImage from "../../assets/one.svg";
import twoImage from "../../assets/two.svg";
import third from "../../assets/three.svg";
import plotSize from "../../assets/plot.svg";
import areaImg from "../../assets/area.svg";
import cross from "../../assets/cross.svg";
import { makeStyles } from "tss-react/mui";
import AminitiesList from "../aminities/AminitiesList";
import Map from "../maps/Map";

const useStyles = makeStyles()((theme) => ({
  bottomImage: {
    display: "flex",
    gap: theme.spacing(1),
  },
  aminitiesDiv: {
    display: "flex",
    gap: theme.spacing(1),
    alignItems: "center",
  },
  dialogPaper: {
    width: "90%",
    maxWidth: "none",
  },
  imgFullWidth: {
    width: "100%",
    height: "auto",
  },
  headingText: {
    fontSize: "20px",
    fontWeight: 400,
  },
  paraText: {
    fontSize: "13px",
    fontWeight: 200,
    color: "#707070",
  },
  dividerStyle: {
    backgroundColor: "black",
    margin: "10px 0px",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  amountText: {
    fontSize: "11px",
    color: "#707070",
  },
  amtHeader: {
    fontWeight: 500,
    fontSize: "18px",
    color: "#B27E02",
    [theme.breakpoints.down("lg")]: {
      fontSize: "14px",
    },
  },
  bottomImageRight: {
    width: "24px",
    height: "24px",
  },
  dividerStyle1: {
    marginRight: "12px",
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  subHeading: {
    fontSize: "13px",
    fontWeight: 400,
  },
  imageAminities: {
    width: "28px",
    height: "28px",
  },
  buttonStyle: {
    borderColor: "#B27E02",
    color: "#B27E02",
    textTransform: "none",
  },
  carouselImage: {
    width: "100%",
    height: "auto",
    display: "block",
  },
  carouselContainer: {
    display: "flex",
    paddingLeft: "20px",
    overflowX: "auto",
    scrollSnapType: "x mandatory",
    position: "relative",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  dotsContainer: {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "5px",
  },
  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#bbb",
    cursor: "pointer",
  },
  activeDot: {
    backgroundColor: "#717171",
  },
}));

function Dialouge({ handleClose, open }) {
  const { classes } = useStyles();
  const [images, setImages] = useState({
    bigImage: hero,
    smallImages: [oneImage, twoImage, third],
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleImageClick = (index) => {
    const newSmallImages = [...images.smallImages];
    const newBigImage = newSmallImages[index];
    newSmallImages[index] = images.bigImage;
    setImages({ bigImage: newBigImage, smallImages: newSmallImages });
  };
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet1 = useMediaQuery("(max-width:1080px)");

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <Dialog
        xl
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          className: classes.dialogPaper,
        }}
      >
        <DialogContent>
          <Grid container spacing={2}>
            {isMobile ? (
              <Grid container className={classes.carouselContainer}>
                <Grid item sm={12}>
                  <img
                    className={classes.carouselImage}
                    src={images.smallImages[currentIndex]}
                    alt={`Carousel ${currentIndex + 1}`}
                  />
                </Grid>

                <div className={classes.dotsContainer}>
                  {images.smallImages.map((_, index) => (
                    <div
                      key={index}
                      className={`${classes.dot} ${
                        index === currentIndex ? classes.activeDot : ""
                      }`}
                      onClick={() => handleDotClick(index)}
                    />
                  ))}
                </div>
              </Grid>
            ) : (
              <Grid item lg={6} md={12}>
                <img
                  className={classes.imgFullWidth}
                  src={images.bigImage}
                  alt="heroImage"
                ></img>
                <Grid container spacing={2}>
                  {images.smallImages.map((src, index) => (
                    <Grid
                      item
                      lg={4}
                      md={12}
                      key={index}
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleImageClick(index)}
                    >
                      <img
                        className={classes.imgFullWidth}
                        src={src}
                        alt={`Small ${index + 1}`}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            )}

            <Grid item md={6} sm={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  gutterBottom={true}
                  className={classes.headingText}
                  sx={{ textAlign: "center" }}
                >
                  Tangled Up In Green
                </Typography>
                {!isTablet1 ? (
                  <img
                    style={{ cursor: "pointer" }}
                    src={cross}
                    alt="Cross"
                    onClick={handleClose}
                  ></img>
                ) : (
                  <></>
                )}
              </Box>
              <Typography gutterBottom={true} className={classes.paraText}>
                Tangled Up In Green, a vision of Total Environment, is a luxury
                plotted development nestled amidst the lush landscapes of
                Devanahalli. This peaceful hideaway in North Bangalore sits on
                115 acres and has exclusive residential plots with a modern
                design and green living blend. The plots range from 1800 sq. ft.
                to 7200 sq. ft. You could be fascinated by the botanical wonders
                found at the Tree Museum or…
              </Typography>
              <Divider className={classes.dividerStyle}></Divider>
              <Grid container>
                <Grid item md={7}>
                  {isMobile ? (
                    <Grid container spacing={4}>
                      <Grid item sm={6}>
                        <Box>
                          <Typography
                            gutterBottom
                            className={classes.amtHeader}
                          >
                            ₹ 1.4 Cr
                          </Typography>
                        </Box>
                        <Typography className={classes.amountText}>
                          (₹ 6,990 / Sq Ft)
                        </Typography>
                      </Grid>
                      <Grid item sm={6}>
                        <Box className={classes.bottomImage}>
                          <img
                            className={classes.bottomImageRight}
                            src={plotSize}
                            alt="Plot Image"
                          ></img>
                          <Typography
                            gutterBottom
                            className={classes.amtHeader}
                          >
                            Plot Size
                          </Typography>
                        </Box>
                        <Typography className={classes.amountText}>
                          1,800 to 7,200 Sq Ft
                        </Typography>
                      </Grid>
                      <Grid item lg={4} md={6} sm={6}>
                        <Box className={classes.bottomImage}>
                          <img
                            className={classes.bottomImageRight}
                            src={areaImg}
                            alt="Area Image"
                          ></img>
                          <Typography
                            gutterBottom
                            className={classes.amtHeader}
                          >
                            Area
                          </Typography>
                        </Box>
                        <Typography className={classes.amountText}>
                          (₹ 6,990 / Sq Ft)
                        </Typography>
                      </Grid>
                      <Grid item lg={4} md={6} sm={6}>
                        <Box className={classes.bottomImage}>
                          <img
                            className={classes.bottomImageRight}
                            src={areaImg}
                            alt="Area Image"
                          ></img>
                          <Typography
                            gutterBottom
                            className={classes.amtHeader}
                          >
                            Total
                          </Typography>
                        </Box>
                        <Typography className={classes.amountText}>
                          Units 968
                        </Typography>
                      </Grid>
                    </Grid>
                  ) : (
                    <>
                      <Grid container>
                        <Grid item lg={3} md={6} sm={6}>
                          <Box>
                            <Typography
                              gutterBottom
                              className={classes.amtHeader}
                            >
                              ₹ 1.4 Cr
                            </Typography>
                          </Box>
                          <Typography className={classes.amountText}>
                            (₹ 6,990 / Sq Ft)
                          </Typography>
                        </Grid>
                        <Grid>
                          <Divider
                            className={classes.dividerStyle1}
                            orientation="vertical"
                          ></Divider>
                        </Grid>
                        <Grid item lg={4} md={5} sm={12}>
                          <Box className={classes.bottomImage}>
                            <img
                              className={classes.bottomImageRight}
                              src={plotSize}
                              alt="Plot Image"
                            ></img>
                            <Typography
                              gutterBottom
                              className={classes.amtHeader}
                            >
                              Plot Size
                            </Typography>
                          </Box>
                          <Typography className={classes.amountText}>
                            1,800 to 7,200 Sq Ft
                          </Typography>
                        </Grid>
                        <Grid>
                          <Divider
                            className={classes.dividerStyle1}
                            orientation="vertical"
                          ></Divider>
                        </Grid>
                        <Grid item lg={4} md={6} sm={6}>
                          <Box className={classes.bottomImage}>
                            <img
                              className={classes.bottomImageRight}
                              src={areaImg}
                              alt="Area Image"
                            ></img>
                            <Typography
                              gutterBottom
                              className={classes.amtHeader}
                            >
                              Area
                            </Typography>
                          </Box>
                          <Typography className={classes.amountText}>
                            115 Acres
                          </Typography>
                        </Grid>
                      </Grid>
                      <Divider
                        sx={{ marginTop: "10px", marginBottom: "10px" }}
                      ></Divider>
                      <Grid container>
                        <Grid item lg={3} md={5}>
                          <Typography
                            gutterBottom
                            className={classes.subHeading}
                          >
                            Total Units
                          </Typography>

                          <Typography className={classes.amountText}>
                            968
                          </Typography>
                        </Grid>
                        <Grid>
                          <Divider
                            className={classes.dividerStyle1}
                            orientation="vertical"
                          ></Divider>
                        </Grid>
                        <Grid item lg={4} md={5}>
                          <Typography
                            gutterBottom
                            className={classes.subHeading}
                          >
                            Project Type
                          </Typography>

                          <Typography className={classes.amountText}>
                            Plotted Development
                          </Typography>
                        </Grid>
                        <Grid>
                          <Divider
                            className={classes.dividerStyle1}
                            orientation="vertical"
                          ></Divider>
                        </Grid>
                        <Grid item lg={4} md={5}>
                          <Typography
                            gutterBottom
                            className={classes.subHeading}
                          >
                            Status
                          </Typography>

                          <Typography className={classes.amountText}>
                            Newly Launched
                          </Typography>
                        </Grid>
                      </Grid>
                    </>
                  )}
                  <Divider className={classes.dividerStyle}></Divider>
                  {isMobile ? (
                    <DialogActions sx={{ margin: "20px 0px" }}>
                      <Button
                        className={classes.buttonStyle}
                        variant="outlined"
                        fullWidth
                        onClick={handleClose}
                      >
                        Chat Now
                      </Button>
                      <Button
                        className={classes.buttonStyle}
                        variant="outlined"
                        fullWidth
                        onClick={handleClose}
                        autoFocus
                      >
                        Call Now
                      </Button>
                    </DialogActions>
                  ) : (
                    <></>
                  )}
                  <Typography gutterBottom className={classes.headingText}>
                    30+ Amenities
                  </Typography>
                  <AminitiesList></AminitiesList>
                  {!isMobile ? (
                    <DialogActions>
                      <Button
                        className={classes.buttonStyle}
                        variant="outlined"
                        fullWidth
                        onClick={handleClose}
                      >
                        Chat Now
                      </Button>
                      <Button
                        className={classes.buttonStyle}
                        variant="outlined"
                        fullWidth
                        onClick={handleClose}
                        autoFocus
                      >
                        Call Now
                      </Button>
                    </DialogActions>
                  ) : (
                    <></>
                  )}
                </Grid>
                {isTablet1 ? (
                  <> </>
                ) : (
                  <Grid item md={5}>
                    <Map />
                  </Grid>
                )}
              </Grid>
            </Grid>
            {isTablet1 ? (
              <Grid item md={6}>
                <Map />
              </Grid>
            ) : (
              <></>
            )}
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Dialouge;
