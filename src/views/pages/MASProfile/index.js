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
import Tabs from "./Tabs";
import BundlesCard from "src/component/BundlesCard";
const useStyles = makeStyles((theme) => ({
    LoginBox: {
        paddingBottom: "50px",
    },
    websiteButton: {
        border: "solid 0.5px #707070",
        backgroundColor: "#fff",
        textAlign: "center",
        fontSize: "17.5px",
        color: "#141518",
        width: "100%",
        borderRadius: "0",
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
}));

export default function Login() {
    const classes = useStyles();
    return (
        <Box className={classes.LoginBox}>
            <Container maxWidth="lg">
            <Box mt={5} mb={5}>
             <Box className={classes.profileText}>
                    <Grid container spacing={3}>
                        <Grid item xl={12} md={12} align="center">
                            <figure className="chatuser chatuser2 chatuser4">
                                <img src="images/user-profile.png" />
                                <Box></Box>
                            </figure>
                            <Typography variant="h3">Adams V
                               
                            </Typography>
                            <Typography variant="h5" style={{ color: "#792034", }}>Bio </Typography>
                            <Typography variant="body2" style={{ color: "#000", marginTop: "10px", }} align="left">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
             </Box>
            </Container>
         <Container maxWidth="xl">
         <Grid container spacing={3}>
                   <Grid item xs={12} md={3}> <BundlesCard/></Grid>
                   <Grid item xs={12} md={3}> <BundlesCard/></Grid>
                   <Grid item xs={12} md={3}> <BundlesCard/></Grid>
                   <Grid item xs={12} md={3}> <BundlesCard/></Grid>
               </Grid>
            <Tabs/>
         </Container>
        </Box>
    );
}
