import React from "react";
import {
    Box,
    Container,
    Button,
    TextField,
    Typography,
    makeStyles,
    Grid,
    Link,
} from "@material-ui/core";
import RightChat from "./RightChat";
import LeftUser from "./LeftUser";
const useStyles = makeStyles((theme) => ({
    LoginBox:{
        paddingBottom:"50px",
    },
    chatmain:{
        display:"flex",
    },
    leftUser:{
        width:"20%",
        height:" 80vh",
        overflowY: "scroll",
        [theme.breakpoints.down('md')]: {
            width:"25%",
          },
    },
    rightUser:{
        width:"80%"
    },
}));

export default function Login() {
    const classes = useStyles();
    return (
        <Box className={classes.LoginBox}>
            <Box className="chatmain">
                <Box className="leftUser">
                <LeftUser/>
                </Box>
                <Box className="rightUser">
                <RightChat />
                </Box>
            </Box>
         
         
        </Box>
    );
}
