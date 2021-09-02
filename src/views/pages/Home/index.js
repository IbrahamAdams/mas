import React from "react";
import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import Profile from './Profile'
import SubscribtionsCard from 'src/component/SubscribtionsCard'
import BundlesCard from 'src/component/BundlesCard'
import Slider from "react-slick";
const useStyles = makeStyles((theme) => ({
  welcomeback: {
    width: "194.5px",
    height: "18px",
    margin: "13.8px 1px 24.5px 10px",
    fontFamily: "Poppins",
    fontSize: "20px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.5",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#000",
  },
  border: {
    border: "2px solid black",
    width: "fit-content"
  },
  Bids: {
    display: "flex",
    flexDirection: "column",

  },
  center: {
    display: "flex",
    justifyContent: "center",
    marginTop:"30px",
    marginBottom:"20px",
    color:"#000000",
  },
  LoginBox: {
    paddingBottom: "50px",
},
}))


function Bids(props) {
  const classes = useStyles();
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    centerMode: true,
    centerPadding: "60px",
    className: "recomended",
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0",
          autoplay: false,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0",
          autoplay: false,
        },
      },
    ],
  };
  return (
    // <Page title="Marketplace | Fungy">
    <Box  className={classes.LoginBox}>
      <Profile />
      <Container maxWidth="xl">
        <Box >
          <div className={classes.center}>
            <Typography variant="h2" alignself="center">Your Subscription</Typography>
          </div>

          <Slider {...settings} className="width100">
          <SubscribtionsCard />
          <SubscribtionsCard />
          <SubscribtionsCard />
          <SubscribtionsCard />
          <SubscribtionsCard />
                </Slider>
        </Box>
        <Box>
          <div className={classes.center}>
            <Typography variant="h2" alignItems="center">Your Bundles</Typography>
          </div>
          <Slider {...settings} className="width100">
          <BundlesCard />
          <BundlesCard />
          <BundlesCard />
          <BundlesCard />
          <BundlesCard />
                </Slider>
        </Box>

      </Container>
    </Box>
    // </Page>
  );
}

export default Bids;
