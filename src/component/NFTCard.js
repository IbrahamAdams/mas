import React from "react";
import {
    Typography,
    Box,
    makeStyles,
    Avatar,
    Grid,
    Button,
    List,
    ListItem,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BsClockHistory } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
    cards: {
        border: "solid 0.5px #e5e3dd",
        backgroundColor: "#fff",
        paddingTop: "20px",
        borderRadius: "10px",
        '& span': {
            fontSize: "14px",
            color: "#141518",
        },
        '& h2': {
            marginTop: "25px",
            fontSize: "25px",
            color: "#141518",
            fontWeight: "bold",
            lineHeight: "1.52",
            wordBreak: "break-word",
        },
    },
    NFTbg: {
        width: "100%",
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "40px",
        fontWeight: "500",
        color: "#fff",
        marginBottom: "20px",
        backgroundImage: "linear-gradient(to bottom, #4fc5c5, #286363)",
    },
    contantCard: {
        padding: "15px",
        borderTop: "solid 0.5px #e5e3dd",
        position: "relative",
        '& h5':{
            display: "flex",
        alignItems: "center",
        },
    },
    timeing: {
        display: "flex",
        position: "absolute",
        top: " -22px",
        right: "0",
        '& li': {
            backgroundColor: "#fff",
            border: "solid 0.5px #e5e3dd",
            fontSize: "10px",
            textAlign: "center",
            width: "auto",
            padding: "5px",
            marginLeft: "3px",
            color: "#141518",
        },
    },
    center_text:{
        textAlign:"center",
        [theme.breakpoints.down("md")]:{
            textAlign:"left",
        },
        '& h5':{
            justifyContent:"center",
            [theme.breakpoints.down("md")]:{
                justifyContent:"flex-start",
            },
        },
    },
}));

export default function UsersCard(props) {
    const classes = useStyles();

    return (
        <Box className={classes.cards} >
            {/* <Typography variant="body2" component="span">{data.title}</Typography>
            <Typography variant="h2" component="h2">{data.data}</Typography> */}
           <Link  to="/NFT-detail"> <Box className={classes.NFTbg}>$NFT</Box></Link>
            <Box className={classes.contantCard}>
                <List className={classes.timeing}>
                    <ListItem>10 days</ListItem>
                    <ListItem>23</ListItem>
                    <ListItem>00</ListItem>
                    <ListItem>40</ListItem>
                </List>
                <Typography variant="h5" component="h5" style={{ color: "#141518",marginBottom:"10px", }}>My NFT</Typography>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={8}>
                        <Typography variant="h5" component="h5" style={{ color: "#707070", }}>Adams Berg &nbsp;
                        <img src="images/icon.png" alt="" width="30px"/>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.center_text}>
                    <Typography variant="body2" component="span" style={{ color: "#000", }}>starting price</Typography>
                    <Typography variant="h5" component="h5" style={{ color: "#d15b5b", }}>10 MAS</Typography>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
