import React from 'react'
import {
    Box,
    Container,
    Button,
    makeStyles,
    Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    LoginBox: {
        display: 'flex',
        padding: '10px 0px',
      },
    connectBox:{
        display: "flex",
        justifyContent:" center",
        alignItems: "center",
        height: "50vh",
        '& h5':{
            fontSize: "30px",
            fontWeight: "500",
            color: "#000",
        },
    },
    modaltitel: {
        fontSize: "30px",
        fontWeight: "600",
        marginBottom: "10px",
        textAlign: "center",
        borderBottom: "solid 1px #e5e3dd",
        paddingBottom: "10px",
        color: "#141518",
        [theme.breakpoints.down('sm')]: {
            fontSize: "20px",
        },
    },
    btnBig:{
        height: "54.5px ",
        width: "237.5px ",
        maxWidth:"100% ",
    },
    
}))

export default function Login() {
    const classes = useStyles()
    return (
        <Box className={classes.LoginBox}>
            <Box className="leftimg">
                <div className="span1"></div>
                <div className="span2"></div>
                <div className="span3"></div>
            </Box>
            <Box className="rightimg">
                <div className="span1"></div>
                <div className="span2"></div>
                <div className="span3"></div>
            </Box>
            <img src="images/centerimg.png" className="centerimg" />
            <Container maxWidth="lg">
                <Typography variant="h3" className={classes.modaltitel}>Connect your wallet</Typography>

                <Box className={classes.connectBox}>
                    <Box textAlign="center">
                <Typography variant="h5" >Web3 wallet detected!</Typography>
                <Typography variant="h5" style={{color: "#707070", margin:"8px 0",}}>Connect to continue</Typography>
                <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            className={classes.btnBig}
                            component={Link}
                            to="/connected-wallet"
                        >
                            Connect wallet
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
