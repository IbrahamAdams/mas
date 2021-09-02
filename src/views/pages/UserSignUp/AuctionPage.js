import React from 'react'
import { Grid, Container, Box, Typography, makeStyles } from '@material-ui/core';
import NFTCard from "src/component/NFTCard";
import AuctionCard from 'src/component/AuctionCard';
import { InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import Slider from "react-slick";

const useStyles = makeStyles((theme) => ({
    mass: {
        // width: "114px",
        height: "24.5px",
        textAlign: "center",
        padding: "20px 0px",
        fontFamily: "Poppins",
        fontSize: "21.5px",
        fontWeight: "700",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.51",
        letterSpacing: "normal",
        texAlign: "left",
        color: "#141518",

    },
    LoginBox: {
        paddingBottom: "50px",
    },
    namemas: {
        // width: "960px",
        // height: "1805.5px",
        padding: "1.5px 0 0",
        backgroundColor: "var(--white)",
        display: "flex",
        justifyContent: "center"
    },
    search: {
        border: "0.5px solid #e5e3dd",
        display: "flex",
        alignItems: "center",
        borderRadius: "6.5px",
    },
    box: {
        paddingleft: "0",
        flexWrap: "inherit"
    }
}))

const AuctionPage = () => {
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
        <Box className={classes.LoginBox}>
            <Container maxWidth="sm">
                <Box mb={5}>
                    <div className={classes.namemas}>
                        <Typography className={classes.mass}>MAS AUCTION</Typography>
                    </div >
                    <div className={classes.search}>
                        <Search />
                        <InputBase
                            fullWidth
                            placeholder="search for auction or MAS"
                        />
                    </div>
                </Box>
            </Container>
            <Container maxWidth="xl">
                <Box mb={5}>
                    <Grid container spacing={2}>
                    <Slider {...settings} className="width100">
                        <Grid item sm={11}> <AuctionCard /></Grid>
                        <Grid item sm={11}> <AuctionCard /></Grid>
                        <Grid item sm={11}> <AuctionCard /></Grid>
                        <Grid item sm={11}> <AuctionCard /></Grid>
                        <Grid item sm={11}> <AuctionCard /></Grid>
                    </Slider>
                    </Grid>
                    {/* <Slider {...settings} className="width100">
                        <AuctionCard />
                        <AuctionCard />
                        <AuctionCard />
                        <AuctionCard />
                        <AuctionCard />
                    </Slider> */}
                </Box>
            </Container>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                        <NFTCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <NFTCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <NFTCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <NFTCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <NFTCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <NFTCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <NFTCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <NFTCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <NFTCard />
                    </Grid>
                </Grid>
            </Container>

        </Box>
    )
}

export default AuctionPage
