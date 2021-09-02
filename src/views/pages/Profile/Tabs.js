import React, { useState } from "react";
import { Box, Container, Typography, makeStyles, Button, Grid } from "@material-ui/core";
import Page from "src/component/Page";
import { mergeClasses } from "@material-ui/styles";
import Auction from "./Auction";
import Bundles from "./Bundles";
import Subscribtions from "./Subscribtions";
import Feed from "./Feed";
// import { Filter } from "react-feather";
// import Filter from "src/component/Filter";

const useStyles = makeStyles((theme) => ({
    Padding_Top: {
        paddingTop: "50px",
        backgroundColor: "#fff",
    },
    PageHeading: {
        fontWeight: "500",
        fontSize: "32px",
        lineHeight: "39px",
        color: "#000",
        paddingBottom: "10px",
    },
}));
function Activity(props) {
    const classes = useStyles();
    const [tabview, setTabView] = useState("bundles");
    return (
        <Page title="Marketplace for NFTs">
            <Box className={classes.Padding_Top}>
                <Container maxWidth="xl">
                    <Box className="TabButtonsBox">
                        <Button   className={tabview === "bundles" ? "active" : " "}  onClick={() => setTabView("bundles")}>My Bundles</Button>
                        <Button  className={tabview === "subscribtions" ? "active" : " "} onClick={() => setTabView("subscribtions")}>My subscribtions</Button>
                        <Button  className={tabview === "feed" ? "active" : " "} onClick={() => setTabView("feed")}>My feed</Button>
                        <Button  className={tabview === "auctions" ? "active" : " "} onClick={() => setTabView("auctions")}>My auctions</Button>
                    </Box>
                <Box className="TabButtonsContant">
                    {tabview === "bundles" ? (  <Bundles/>):('')}
                    {tabview === "subscribtions" ? (  <Subscribtions/>):('')}
                    {tabview === "feed" ? (  <Feed/>):('')}
                    {tabview === "auctions" ? (  <Auction/>):('')}
                    </Box>
                </Container>
            </Box>
        </Page>
    );
}

export default Activity;
