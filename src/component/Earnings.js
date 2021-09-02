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

const useStyles = makeStyles((theme) => ({
    token:{
        textAlign:"center",
        padding:"20px 0",
        '& p':{
            fontSize: "14px",
            fontWeight: "500",
            lineHight:"20px",
            color:"#000",
        },
        '& img':{
            marginTop:"5px",
        },
    },
}));

export default function UsersCard(props) {

  const classes = useStyles();
  const { type, data } = props;

  return (
    <Box className="CardBox">
      <Box className={`${classes.token} lesspadd`}>
        <Box>
          <Typography variant="body2" component="p">{data.number}</Typography>
          <Typography variant="body2"  component="p">{data.tokenname}</Typography>
          <img src={data.tokenimg}/>
        </Box>
      </Box>
    </Box>
  );
}
