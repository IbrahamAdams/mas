import React from "react";
import {
    Box,
    Container,
    Typography,
    makeStyles,
    Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    profilebg: {
        boxShadow: " 0 1.5px 3px 0 rgba(0, 0, 0, 0.16)",
        backgroundImage: " linear-gradient(to bottom, #c04848, #480048)",
        height: " 143.5px",
        width: "100%"
    },
    bgimg: {
        width: "100%",
        height: "100%",
    },
    profileText: {
        '& h3': {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "25px",
            fontWeight: "500",
            color: "#000",
        },
        '& h5': {
            fontSize: "16px",
            fontWeight: "700",
            color: "#707070",
        },
        '& p': {
            fontSize: "14px",
            fontWeight: "300",
            color: "#707070",

        },
    },
    masBox: {
        backdropFilter: " blur(15px)",
        border: "solid 0.5px #e5e3dd",
        backgroundColor: "#fff",
        padding: "10px",
        '& ul': {
            display: "flex",
            padding: "0",
            justifyContent: "center",
            '& li': {
                display: "flex",
                justifyContent: "center",
                // padding: "15px",
                position: "relative",
                '&::after': {
                    content: " ''",
                    position: "absolute",
                    height: "70%",
                    width: "1px",
                    backgroundColor: "#e5e3dd",
                    right: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                },
                '&:last-child::after': {
                    display: "none",
                },
            },
        },
    },
    masBoxFlex: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        '& button': {
            height: "30px",
            fontSize: "12px",
        },
    },
}));

export default function Login() {
    const classes = useStyles();
    return (
        <Box>
            <Typography variant="h3" align="center">About the creator:</Typography>
            <Box className={classes.profilebg} mt={3}>
                {/* <img src="images/bg.png" className={classes.bgimg} /> */}
            </Box>
            <Container maxWidth="lg">
                <Box className={classes.profileText}>
                    <Grid container spacing={3}>
                        <Grid item xl={12} md={12} align="center">
                            <figure className="chatuser chatuser2">
                                <img src="images/user-profile.png" />
                                <Box></Box>
                            </figure>
                            <Typography variant="h3">Adams V
                                <img src="images/icon.png" style={{ width: "30px", marginLeft: "5px", }} />
                            </Typography>
                            <Typography variant="h5" style={{ color: "#000", }}>Bio </Typography>
                            <Typography variant="body2" style={{ color: "#000", marginTop: "10px", }} align="left">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>

    );
}
