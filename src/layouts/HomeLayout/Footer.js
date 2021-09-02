import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  List,
  ListItem,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TelegramIcon from "@material-ui/icons/Telegram";
import { FaFacebookF } from "react-icons/fa";
import { GrMedium } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

import {} from "react-feather";
import Logo from "./../../component/Logo";

const useStyles = makeStyles((theme) => ({
  footerSection: {
    background: "#e5e3dd",
    position: "relative",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    "& h5": {
      fontWeight: "bold",
      fontSize: "16px",
      letterSpacing: "2px",
      textTransform: "uppercase",
    },
    "& p": {
      marginBottom: "20px",
      marginTop: "10px",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "18px",
    },
    '& svg':{
      color:"#000",
      fontSize:"25px",
      paddingLeft:"10px",
      cursor: "pointer",
      [theme.breakpoints.down("sm")]: {
        fontSize:"20px",
      },
    },
  },
  input_fild: {
    backgroundColor: "#ffffff6e",
    borderRadius: "10px",
    color: "#fff",
    height: "48px",
    width: "100%",
    borderBottom: "none",
    "&:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
      },
    },
    "& .MuiInputBase-input": {
      color: "#fff",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
      borderWidth: 0,
    },
  },

  footerBg: {
   width:"100%",
   [theme.breakpoints.down("xs")]: {
    maxWidth:"100px",
    margin:"auto",
  },
  },
  ListItem: {
    paddingLeft: "0px",
  },
  borderBottmo: {
    overflow: "hidden",
    background: "#000",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    },
  },
  signupBtn: {
    color: "#0F8ACA",
    borderRadius: "10px",
    display: "flex",
    fontSize: "16px",
    fontWeight: "bold",
    height: "48px",
    minWidth: "135px",
    boxShadow:
      "0px 8px 24px rgba(38, 50, 56, 0.1), 0px 16px 32px rgba(38, 50, 56, 0.08)",
    lineHeight: "36px",
    alignItems: "center",
    textAlign: "center",
    letterSpacing: " 1px",
    background: "#fff",
    "&:hover": {
      background: "#fff",
      color: "#0F8ACA",
    },
  },
  largeIcon: {
    width: 18,
    height: 18,
    marginRight: "8px",
  },
  icons: {
    justify: "flex-end",
    [theme.breakpoints.down("sm")]: {
      justify: "center",
    },
  },
  media:{textAlign:"right",
  [theme.breakpoints.down("sm")]: {
    textAlign:"left",
  },
},
}));

export default function Liquidity() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.footerSection}>
        <Box>
          <Container maxWidth="xl">
            <Grid
              container
              justify="space-around"
              alignItems="center"
              spacing={1}
            >
           
              <Grid item xs={12} md={12} lg={12}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12} sm={2} md={2}>
                  <img
                src="images/footer-logo.svg"
                alt=""
                className={classes.footerBg}
              />
                  </Grid>
                  <Grid item xs={5} sm={3} md={2}>
                    <List className="listingFooter">
                      <ListItem>
                        <Link to="/profile">
                        About
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/collectibles">
                        Careers
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/refferal">
                        Affiliate program
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/account-review">
                        Press
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/account-review">
                        Partnerships
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/account-review">
                        Docs
                        </Link>
                      </ListItem>
                      

                    </List>
                  </Grid>
                  <Grid item xs={7} sm={4} md={3}>
                    <List className="listingFooter">
                      <ListItem>
                        <Link to="/profile">
                        Terms and conditions
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/collectibles">
                        Privacy policy
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/favourites">
                        Risk disclosure statement
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/basicinfo">
                        KYC program
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link to="/basicinfo" className="footer_btn" style={{color:"#fff",}}>
                        become a MAS
                        </Link>
                      </ListItem>
                    </List>
                  </Grid>
                  {/* <Grid item xs={6} md={3} align="center">
                    <Typography variant="body">Stay tuned for our applications on:</Typography> <br/>
                    <img src="images/app.png"/> <br/>
                    <img src="images/google.png"/> <br/>
                  </Grid> */}
                  <Grid item xs={12} sm={3} md={5} className={classes.media} >
                    <FaFacebookF/> <AiOutlineTwitter/> <AiFillYoutube/> <TelegramIcon/> <GrMedium/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
