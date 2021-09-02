import React from "react";
import {
  Typography,
  Box,
  makeStyles,
  Avatar,
  Grid,
  Button,
  Link,
} from "@material-ui/core";
import { FaEllipsisV } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BsClockHistory } from "react-icons/bs";
import { FcLike } from "react-icons/fc";
import { FiMoreHorizontal } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  token: {
    textAlign: "center",
    padding: "20px 0",
    '& p': {
      fontSize: "14px",
      fontWeight: "500",
      lineHight: "20px",
      color: "#000",
    },
    '& img': {
      marginTop: "5px",
    },
  },
  feedBox: {
    border: "solid 0.5px #e5e3dd",
    padding: "20px",
    borderRadius: "20px",
    marginBottom: "30px",
    position: "relative",
    '& p': {
      fontSize: "14px",
      marginTop: "10px",
    },
  },
  feedpost: {
    width: "100%",
    height: "350px",
    border: "solid 0.5px #e5e3dd",
    marginTop: "15px",
    '& img': {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  LikeBox: {
    fontSize: "20px",
    cursor: "pointer",
  },
  feedmenu: {
    fontSize: "20px",
    color: "#707070",
    position: "absolute",
    right: "10px",
    top: "10px",
  },
  blurBox: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: "9",
    display: "flex",
    justifyContent: " center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    color: " #141518",
    backgroundColor: "#ffffff80",
    '& span': {
      color: "#f26a6a",
    },
  },
}));

export default function UsersCard(props) {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box className="">
      <Box className={classes.feedBox}>
        {/* <Box className={classes.blurBox}><div>Content locked <br />
          Please subscribe <br />
          Unlocked at <span> bundle IV</span></div></Box> */}
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className={classes.feedmenu}>
          <FiMoreHorizontal />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Share</MenuItem>
          <MenuItem onClick={handleClose}>Like</MenuItem>
        </Menu>
        <Box display="flex" alignItems="center">
          <figure className="chatuser chatuser3 ">
            <img src="images/user-profile.png" />
          </figure>
          <div> <Typography variant="h6" style={{ marginBottom: "0", }}>John Doe <img src="images/blue-check.png" width="20px" /></Typography>
            <Typography variant="body" component="small">since 2 days</Typography></div>
        </Box>
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        </Typography>
        <Box className={classes.feedpost}>
          <img src="images/feed1.png" />
        </Box>
        <Box className={classes.LikeBox} mt={2}>
          <FcLike /> <Typography variant="body1" component="span">3K likes</Typography>
        </Box>
      </Box>
    </Box>
  );
}
