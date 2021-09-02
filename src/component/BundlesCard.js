import React, { useState, useRef } from "react";
import {
    Typography,
    Box,
    makeStyles,
    Grid,
    Button,
    TextField,
    InputAdornment,
    Input,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FiMoreHorizontal } from "react-icons/fi";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { FiDownload } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
    cards: {
        border: "solid 0.5px #e5e3dd",
        backgroundColor: "#fff",
        padding: "10px",
        borderRadius: "10px",
        margin: "0 10px",
        position: "relative",

    },
    NFTbg: {
        width: "100%",
        height: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "12px",
        fontWeight: "500",
        color: "#fff",
        marginBottom: "20px",
        backgroundImage: "linear-gradient(to bottom, #c04848, #480048)",
    },
    contantCard: {
        textAlign: "left",
        position: "relative",
        '& h6': {
            marginBottom: "2px !important",
            fontSize: "18px !important",
            [theme.breakpoints.down("md")]:{
                fontSize: "14px !important",  
            },
            '& span': {
                color: "#000",
                paddingLeft: "5px",
            },
        },
        '& p': {
            fontSize: "12px",
        },
    },
    contantCard2: {
        textAlign: "left",
        position: "relative",
        paddingTop: "10px",
        borderTop: "solid 0.5px #707070",
        '&::after': {
            position: "absolute",
            border: " solid 0.5px #707070",
            content: "''",
            left: "50%",
            top: "0",
            transform: "translatex(-50%)",
        },
    },
    btnBox: {
        display: "flex",
        alignItems: "center",
        '& button': {
            fontSize: "8px !important",
        },
    },
    sublink: {
        display: "flex",
        justifyContent: "space-between",
        color: "#000",
        alignItems: "center",
        paddingBottom: "10px",
        position: "relative",
        '&::after': {
            content: "''",
            height: " 1px",
            width: "70%",
            position: "absolute",
            backgroundColor: "#cccc",
            bottom: "6px",
            maxWidth: "100%",
            left: "50%",
            transform: " translateX(-50%)",
        },
    },
    nftimg: {
        border: " solid 0.5px #e5e3dd",
        height: "100px",
        width: "100%",
        margin: "10px 0",
        '& img': {
            width: "100%",
            height: "100%",
        },
    },
    feedmenu: {
        fontSize: "20px",
        color: "#707070",
        position: "absolute",
        right: "0px",
        top: "0px",
        zIndex: "9",
    },
    donation: {
        '& span': {
            fontSize: "12px",
            padding: "2px 5px",
            border: "1px solid #ccc",
        },
    },
    input_fild2: {
        width: "100%",
        "& input": {
            height: "45px",
        },
    },
    changepic: {
        textAlign: "center",
        '& img': {
            width: "80%",
        },
        '& small': {
            position: "relative",
            fontSize: "12px !important",
            '& input': {
                position: "absolute",
                width: "300px",
                left: "50%",
                transform: "translateX(-50%)",
                opacity: "0",
            }
        },
    },

    // cs
    PhotoBox: {
        "& img": {
            maxWidth: "100%",
            borderRadius: "15px",
        },
    },
    bundleText: {
        "& .red": {
            color: "#792034",
        },
        "& h4": {
            color: "#141518",
            fontSize: "20px",
        },
    },
    deskiText: {
        "& h4": {
            marginBottom: "10px",
            color: "#707070",
            fontSize: "20px",
            "& span": {
                color: "#141518",
            },
        },
    },
    input_fild2: {
        width: "100%",
        "& input": {
            height: "45px",
        },
    },
    input_fild: {
        backgroundColor: "#ffffff6e",
        borderRadius: "5.5px",
        border: " solid 0.5px #e5e3dd",
        color: "#141518",
        width: "100%",
        "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
            },
        },
        "& .MuiInputBase-input": {
            color: "#141518",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            borderWidth: 0,
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
    certificateimg:{
        margiBottom:"30px",
        width:"100%",
        height:"auto",
    }
}));

export default function UsersCard(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [OpenBundle, setOpenBundle] = useState(false);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setAnchorEl(null);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen1 = () => {
        setAnchorEl(null);
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    const [open2, setOpen2] = React.useState(false);

    const handleClickOpen2 = () => {
        setAnchorEl(null);
        setOpen2(true);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };



    const [open3, setOpen3] = React.useState(false);

    const handleClickOpen3 = () => {
        setAnchorEl(null);
        setOpen3(true);
    };

    const handleClose3 = () => {
        setOpen3(false);
    };
  


    const [open5, setOpen5] = React.useState(false);

    const handleClickOpen5 = () => {
        setAnchorEl(null);
        setOpen5(true);
    };

    const handleClose5 = () => {
        setOpen5(false);
    };
    return (
        <Box className={classes.cards} >
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
                <MenuItem onClick={handleClickOpen}>Edit</MenuItem>
                <MenuItem onClick={handleClickOpen1}>View</MenuItem>
                <MenuItem onClick={handleClickOpen2}>Subscribe now</MenuItem>
            </Menu>
            <Box className={classes.contantCard}>
                <Typography variant="h6" component="h6" style={{ color: "#792034", }}>Bundle I <span>Basic supporter</span></Typography>
                <Box className={classes.nftimg}>
                    <img src="images/Profilebg.png" />
                </Box>
                <Typography variant="h6" component="h6" style={{ color: "#000", fontWeight: "400", }}><span style={{ color: "#707070", }}>Donation amount: </span>10 MAS </Typography>
                <Typography variant="h6" component="h6" style={{ color: "#000", fontWeight: "400", }}><span style={{ color: "#707070", }}>Duration: </span>One month</Typography>
                <Typography variant="h6" component="h6" style={{ color: "#000", fontWeight: "400", }}><span style={{ color: "#707070", }}>Number of subscribers: </span>100</Typography>
            </Box>






            {/* edit */}
            <Dialog
                open={open}
                fullWidth="sm"
                maxWidth="sm"
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Typography variant="h4" align="center" style={{ color: "#792034", margiBottom: "10px", }}>Bundle I</Typography>
                        <Typography variant="h6" align="center" style={{ color: "#000", borderBottom: "solid 0.5px #e5e3dd", }} > My basic supporter (edit name)</Typography>

                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <label>  Donation Amount</label>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <TextField
                                        id="standard-basic"
                                        placeholder="30"
                                        className={classes.input_fild2}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                        <Box style={{ paddingBotton: "10px", borderBottom: "solid 0.5px #e5e3dd", }}>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} md={4}>
                                    <label> Duration</label>
                                </Grid>
                                <Grid item xs={12} md={8} className={classes.donation}>
                                    <span>7 Days</span><span>14 Days</span><span>30 Days</span><span>60 Days</span><span>1 Year</span><span>Forever</span>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box align="center">
                            <label> Services:</label>
                            <Typography variant="body2" componant="p" style={{ color: "#000", fontSize: "20px" }}>
                                I will send you a special video every <br />
                                month specially for you! (edit)
                            </Typography>
                        </Box>
                        <Box mt={2} className={classes.changepic}>
                            <small>Change/upload a photo or video

                                <input type="file" />
                            </small>
                            <img src="images/Rectangle.png" />
                        </Box>
                        <Box mt={4}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item md={4}>
                                    <Link style={{ color: "#000", }}     onClick={handleClose}>Delete this bundle</Link>
                                </Grid>
                                <Grid item md={4}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="primery"
                                        className="btn-block removeredius"
                                        onClick={handleClose}
                                    >
                                        Cancel
                                    </Button>
                                </Grid>
                                <Grid item md={4}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="secondary"
                                        className="btn-block removeredius ml-10"
                                        onClick={handleClose}
                                    >
                                        Save Changes
                                    </Button>
                                </Grid>

                            </Grid>
                        </Box>

                    </DialogContentText>
                </DialogContent>
            </Dialog>


            {/* view */}

            <Dialog
                open={open1}
                fullWidth="sm"
                maxWidth="sm"
                onClose={handleClose1}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Typography variant="h4" align="center" style={{ color: "#792034", margiBottom: "10px", }}>Bundle I</Typography>
                        <Typography variant="h6" align="center" style={{ color: "#000", borderBottom: "solid 0.5px #e5e3dd", }} > My basic supporter</Typography>

                        <Box align="center" mt={3}>
                            <Typography variant="h6" component="h6" style={{ color: "#000", fontWeight: "400", }}><span style={{ color: "#707070", }}>Donation amount: </span>10 MAS </Typography>
                            <Typography variant="h6" component="h6" style={{ color: "#000", fontWeight: "400", }}><span style={{ color: "#707070", }}>Duration: </span>One month</Typography>
                            <Typography variant="h6" component="h6" style={{ color: "#000", fontWeight: "400", }}><span style={{ color: "#707070", }}>Number of subscribers: </span>100</Typography>

                        </Box>



                        <Box align="center">
                            <label> Services:</label>
                            <Typography variant="body2" componant="p" style={{ color: "#000", fontSize: "20px" }}>


                                I will send you a special video every <br />
                                month specially for you! 

                            </Typography>
                        </Box>
                        <Box mt={2} className={classes.changepic}>

                            <img src="images/Rectangle.png" />
                        </Box>

                    </DialogContentText>
                </DialogContent>
            </Dialog>



            {/* Subscribe now */}

            <Dialog
                fullWidth="sm"
                maxWidth="sm"
                open={open2}
                onClose={handleClose2}
                aria-labelledby="max-width-dialog-title"
            >
                <DialogContent>
                    <Box className={classes.PhotoBox}>
                        <img src="/images/Profilebg.png" alt="" />
                    </Box>
                    <Box mt={3} className={classes.bundleText} textAlign="center">
                        <Typography variant="h4" className="red">
                            Bundle I
                        </Typography>
                        <Typography variant="h4">The basic bundle</Typography>
                    </Box>

                    <Box mt={2} className={classes.deskiText}>
                        <Typography variant="h4" align="left" color="textSecondary">
                            Donation amount: <span>15 MAS</span>
                        </Typography>
                        <Typography variant="h4" align="left" color="textSecondary">
                            Duration: <span>1 month</span>
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={3} lg={2}>
                                <Typography variant="h4" align="left" color="textSecondary">
                                    Details:{" "}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={9} lg={10}>
                                <Typography
                                    variant="body2"
                                    align="left"
                                    color="textSecondary"
                                >
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                    magna aliquyam erat, sed diam voluptua. At vero eos et
                                    accusam et justo duo dolores et ea rebum. Stet clita kasd
                                    gubergren, no sea takimata sanctus est Lorem ipsum dolor
                                    sit amet. Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                                    ut labore et dolore magna aliquyam erat, sed diam
                                    voluptua. At vero eos et accusam et justo duo dolores et
                                    ea rebum. Stet clita kasd gubergren, no sea takimata
                                    sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                                    sit amet, consetetur sadipscing elitr, sed diam nonumy
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={3} mb={3} textAlign="center">
                        <Button variant="contained" color="secondary" size="large"  onClick={handleClose2}>
                            Subscribe now
                        </Button>
                    </Box>
                </DialogContent>
            </Dialog>


            {/* enter amount */}

            <Dialog
                open={open3}
                fullWidth="sm"
                maxWidth="sm"
                onClose={handleClose3}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent className={classes.dilogBody}>
                    <DialogContentText id="alert-dialog-description">
                        <Typography variant="h4" align="center" style={{ color: "#000" }}>Enter an amount</Typography>
                        <Box mt={4}>
                            <Input
                                placeholder="300"
                                className={classes.input_fild2}
                                endAdornment={
                                    <InputAdornment position="end">
                                        Select a token
                                    </InputAdornment>
                                }
                            />

                        </Box>

                        <Box mt={4}>
                            <Typography variant="h4" align="center" style={{ color: "#000" }}>Send a message</Typography>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                className={classes.input_fild}
                                defaultValue="Default Value"
                                variant="outlined"
                            />
                        </Box>
                        <Box mt={2} mb={4}>
                            <Button
                                variant="contained"
                                size="large"
                                color="secondary"
                                className="btnWidth btn-block btnHight"
                                onClick={handleClickOpen5}
                            >
                                Donate now
                            </Button>
                        </Box>
                        <small>ETH fees and           ETH fees and                       apply.            apply.</small>
                    </DialogContentText>
                </DialogContent>
            </Dialog>



{/* certificate */}

<Dialog
                open={open5}
                fullWidth="md"
                maxWidth="md"
                onClose={handleClose5}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent className={classes.certificate}>
                    <img src="images/img.png" className={classes.certificateimg}/>
                        <Box mt={2} mb={4} style={{width:"100%",maxWidth:"200px",margin:"0 auto",}}>
                            <Button
                                variant="contained"
                                size="large"
                                color="secondary"
                                className="btnWidth btn-block btnHight"
                                onClick={handleClickOpen1}
                            >
                               download <FiDownload/>
                            </Button>
                        </Box>
                </DialogContent>
            </Dialog>
            
        </Box>
    );
}