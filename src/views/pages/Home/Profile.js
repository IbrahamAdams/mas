import React, { useState, useRef } from "react";
import {
    Box,
    Container,
    Button,
    TextField,
    List,
    ListItem,
    Typography,
    makeStyles,
    InputAdornment, DialogTitle,
    Input,
    Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Earnings from "src/component/Earnings";
import { AiFillSetting } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const walletdetails = [
    {
        tokenimg: "images/tokens/1.png",
        number: "100",
        tokenname: "MAS",
    },
    {
        tokenimg: "images/tokens/2.png",
        number: "100",
        tokenname: "BTC",
    },
    {
        tokenimg: "images/tokens/3.png",
        number: "100",
        tokenname: "USDT",
    },

    {
        tokenimg: "images/tokens/4.png",
        number: "100",
        tokenname: "ETH",
    },
];
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
            [theme.breakpoints.down('sm')]: {
                fontSize: "20px",
            },
        },
        '& a': {
            fontSize: "16px",
            fontWeight: "700",
            color: "#707070",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            '& svg': {
                paddingRight: "5px",
            },
        },
        '& p': {
            fontSize: "14px",
            fontWeight: "500",
            color: "#707070",
            textTransform: " uppercase",

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
    dilogBody: {
        paddingBottom: "30px",
        position: "relative",
        '& small': {
            position: "absolute",
            bottom: " 3px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "13px",
            width: "100%",
            textAlign: "center",
        },
    },


    // modal css

    dailogTitle: {
        textAlign: "Center",
        "& h2": {
            color: "#141518",
            fontSize: "23px",
        },
    },
    tokenList: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "7px",
        border: "solid 0.5px #e5e3dd;",
        "&:hover": {
            backgroundColor: "rgba(209, 91, 91, 0.39)",
        },
        "& h3": {
            color: "#141518",
            fontSize: "14px",
        },
    },
    input_fild2: {
        width: "100%",
        "& input": {
            height: "45px",
        },
    },
    dilogBody2: {
        boxShadow: "0 1.5px 3px 0 rgb(0 0 0 / 16%)",
        backgroundImage: "linear-gradient(to bottom, #c04848, #480048)",
        borderRadius: "50px",
        overflow: "hidden",
    },
    dilogBody3: {
        backgroundColor: "#101010",
    },
    table: {
        '& th': {
            color: "#fff",
        },
        '& td': {
            color: "#fff",
        },
    },
    userno: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        '& svg': {
            paddingRight: "5px",
        },
    },
}));

export default function Login() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [openBuy, setOpenBuy] = useState(false);
    const [open2, setOpen2] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handleClickOpen2 = () => {
        setOpen2(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleClose1 = () => {
        setOpen1(false);
    };
    const handleClose2 = () => {
        setOpen2(false);
    };
    return (
        <Box>
            {/* <Box className={classes.profilebg}> */}
            {/* <img src="images/bg.png" className={classes.bgimg} /> */}
            {/* </Box> */}
            <Box className={classes.profileText}>
                <Container maxWidth="xl">
                    <Grid container spacing={3} alignItems="flex-end">

                        <Grid item xs={12} sm={4} md={4} lg={2} align="center">
                            <Box className={classes.masBox} mt={5}>
                                <figure className="chatuser chatuser5">
                                    <img src="images/user-profile.png" />
                                    <Box></Box>
                                </figure>
                                <Typography variant="h3">Adams V
                                </Typography>
                                <Typography variant="h5" component={Link} to="/mas-profile">is a MAS </Typography>
                                <img src="images/MAS PLUS.svg" style={{ width: "30px", }} />
                                {/* <Button className="share-btn">Share</Button> */}
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={8} md={8} lg={5} >
                            <Box mt={4}>
                                <Typography variant="body2" component="p" className="mb-30">Your balance on mas</Typography>
                                <Box className={classes.masBox} >
                                    <List>
                                        {walletdetails.map((data, i) => {
                                            return (
                                                <ListItem>
                                                    <Earnings data={data} type="card" index={i} />
                                                </ListItem>
                                            );
                                        })}
                                    </List>
                                </Box>





                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={5}>
                            <Box mt={4} className={classes.masBoxFlex}> <Typography variant="body2" component="p" className="mb-30">OVERVIEW</Typography>
                                <Box display="flex">
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="primery"
                                        onClick={handleClickOpen}
                                        className=""
                                    >
                                        Deposit
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="secondary"
                                        onClick={handleClickOpen1}
                                        className="ml-10"
                                    >
                                        Withdraw
                                    </Button>
                                    <Button className="setting"
                                        component={Link}
                                        to="/profilesettings"
                                    >
                                        <AiFillSetting />
                                    </Button>
                                </Box>
                            </Box>
                            <Box className={classes.masBox}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4} md={3}>
                                        <Box className={`${classes.masBox} total`} align="center">
                                            <Typography variant="h5" className={classes.userno}><FaUserFriends />200</Typography>
                                            <Typography variant="span">total supporters</Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={8} md={9}>
                                        <Typography variant="body2" component="p" className="earning-font">TOTAL Earnings</Typography>
                                        <Box className={classes.masBox}>
                                            <List>
                                                {walletdetails.map((data, i) => {
                                                    return (
                                                        <ListItem className="lessFont">
                                                            <Earnings data={data} type="card" index={i} />
                                                        </ListItem>
                                                    );
                                                })}
                                            </List>
                                        </Box>
                                    </Grid>
                                </Grid>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Deposit modal */}

            <Dialog
                open={open}
                fullWidth="sm"
                maxWidth="sm"
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent className={classes.dilogBody}>
                    <DialogContentText id="alert-dialog-description">
                        <Typography variant="h5" align="center" style={{ color: "#792034", margiBottom: "10px", }}>Deposit</Typography>
                        <Typography variant="body2" align="center" style={{ color: "#000", }} >Choose amount to deposit:</Typography>
                        <Container maxWidth="md">
                            <Box mt={4}>
                                <Input
                                    placeholder="300"

                                    className={classes.input_fild2}
                                    endAdornment={
                                        <InputAdornment position="end" onClick={() => setOpenBuy(true)}>
                                            Select a token
                                        </InputAdornment>
                                    }
                                />

                            </Box>
                            <Box mt={2} mb={4}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    color="secondary"
                                    className="btnWidth btn-block btnHight"
                                    onClick={handleClose}
                                >
                                    approve and deposit
                                </Button>
                            </Box>
                        </Container>
                        <small>ETH fees apply.</small>
                    </DialogContentText>
                </DialogContent>
            </Dialog>


            {/* Withdraw modal */}
            <Dialog
                open={open1}
                fullWidth="sm"
                maxWidth="sm"
                onClose={handleClose1}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent className={classes.dilogBody}>
                    <DialogContentText id="alert-dialog-description">
                        <Typography variant="h5" align="center" style={{ color: "#792034", margiBottom: "10px", }}>Withdraw</Typography>
                        <Typography variant="body2" align="center" style={{ color: "#000", }} >Choose amount to deposit:</Typography>
                        <Container maxWidth="md">
                            <Box mt={4}>
                                <Input
                                    placeholder="300"
                                    className={classes.input_fild2}

                                    endAdornment={
                                        <InputAdornment position="end" onClick={() => setOpenBuy(true)}>
                                            Select a token
                                        </InputAdornment>
                                    }
                                />

                            </Box>
                            <Box mt={2} mb={4}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    color="secondary"
                                    className="btnWidth btn-block btnHight"
                                    onClick={handleClose1}
                                >
                                    approve and deposit
                                </Button>
                            </Box>
                        </Container>
                        <small>ETH fees and   <Link style={{ color: "#000", textDecoration: "underline", }} onClick={handleClickOpen2}> MAS fees</Link>               apply.</small>
                    </DialogContentText>
                </DialogContent>
            </Dialog>

            {/* select Token */}

            {openBuy && (
                <Dialog
                    fullWidth="sm"
                    maxWidth="sm"
                    open={openBuy}
                    onClose={() => setOpenBuy(false)}
                    aria-labelledby="max-width-dialog-title"
                >
                    <DialogContent>
                        <DialogTitle className={classes.dailogTitle}>
                            Select a token
                        </DialogTitle>
                        <Box mt={3} className={classes.tokenList}>
                            <Typography variant="h3" className="red">
                                $ MAS
                            </Typography>
                            <img src="/images/tokens/1.png" alt="coin" />
                        </Box>
                        <Box mt={2} className={classes.tokenList}>
                            <Typography variant="h3" className="red">
                                $ BTC
                            </Typography>
                            <img src="/images/tokens/2.png" alt="coin" />
                        </Box>
                        <Box mt={2} className={classes.tokenList}>
                            <Typography variant="h3" className="red">
                                $ ETH
                            </Typography>
                            <img src="/images/tokens/4.png" alt="coin" />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setOpenBuy(false)}
                            size="large"
                        >
                            cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => setOpenBuy(false)}
                            size="large"
                        >
                            Apply
                        </Button>
                    </DialogActions>
                </Dialog>
            )}


            {/* mas table */}

            <Dialog
                open={open2}
                fullWidth="md"
                maxWidth="md"
                onClose={handleClose2}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"

            >
                <DialogContent className={classes.dilogBody3}>
                    <DialogContentText id="alert-dialog-description">
                        <Box className={classes.dilogBody2}>
                            <TableContainer>
                                <Table className={classes.table} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell align="center">$MAS
                                                HELD</TableCell>
                                            <TableCell align="center">PROFILE
                                                BADGE</TableCell>
                                            <TableCell align="center">CONTENT CREATOR
                                                FEES</TableCell>
                                            <TableCell align="center">CONTENT CREATOR
                                                FEES</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell >BASIC
                                            </TableCell>
                                            <TableCell align="center">0</TableCell>
                                            <TableCell align="center">No</TableCell>
                                            <TableCell align="center">3%</TableCell>
                                            <TableCell align="center">0%</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell >SILVER
                                            </TableCell>
                                            <TableCell align="center">0</TableCell>
                                            <TableCell align="center">No</TableCell>
                                            <TableCell align="center">3%</TableCell>
                                            <TableCell align="center">0%</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell >GOLD
                                            </TableCell>
                                            <TableCell align="center">0</TableCell>
                                            <TableCell align="center" >
                                                <Typography style={{ display: "flex", justifyContent: "center", }} alignItems="center">GOLD <img src="images/yellow-check.png" style={{ marginLeft: "5px" }} /></Typography>
                                            </TableCell>
                                            <TableCell align="center">3%</TableCell>
                                            <TableCell align="center">0%</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell >DIAMOND
                                            </TableCell>
                                            <TableCell align="center">0</TableCell>
                                            <TableCell align="center" >
                                                <Typography style={{ display: "flex", justifyContent: "center", }} alignItems="center">DIAMOND <img src="images/blue-check.png" width="25" style={{ marginLeft: "5px" }} /></Typography>
                                            </TableCell>
                                            <TableCell align="center">3%</TableCell>
                                            <TableCell align="center">0%</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell >MAS PLUS
                                            </TableCell>
                                            <TableCell align="center">0</TableCell>
                                            <TableCell align="center" >
                                                <Typography style={{ display: "flex", justifyContent: "center", }} alignItems="center">MAS PLUS <img src="images/blue-check.png" width="25" style={{ marginLeft: "5px" }} /></Typography>
                                            </TableCell>
                                            <TableCell align="center">3%</TableCell>
                                            <TableCell align="center">0%</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Box>
                    </DialogContentText>
                </DialogContent>
            </Dialog>



        </Box>

    );
}
