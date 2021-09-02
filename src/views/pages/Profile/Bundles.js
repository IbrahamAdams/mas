import React, { useState, useRef } from "react";
import {
    Box,
    Container,
    Button,
    TextField,
    Typography,
    makeStyles,
    InputAdornment,
    Input,
    Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import BundlesCard from "src/component/BundlesCard";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FaFacebookF } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { RiMessengerFill } from "react-icons/ri";
const useStyles = makeStyles((theme) => ({

    input_fild: {
        backgroundColor: "#ffffff6e",
        borderRadius: "5.5px",
        border: " solid 0.5px #e5e3dd",
        color: "#141518",
        // height: "48px",
        width: "100%",
        maxWidth: "500px",
        margin: "0 auto",
        borderRadius: "20px",
        "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
            },
        },
        "& .MuiInputBase-input": {
            color: "#141518",
            height: "34px",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            borderWidth: 0,
        },
    },
    LoginBox: {
        paddingTop: "20px",
        "& h6": {
            fontWeight: "bold",
            marginBottom: "10px",
            fontSize: "20px",
            color: "#000",
            '& span': {
                fontWeight: "300",
            },
        },
    },
    TokenBox: {
        border: "solid 0.5px #e5e3dd",
        padding: "5px",
    },
    masBoxFlex: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
        [theme.breakpoints.down("xs")]: {
            display: "block",
          },
    },


    dailogTitle: {
        textAlign: "Center",
        "& h2": {
            color: "#141518",
            fontSize: "23px",
        },
    },
    input_fild2: {
        width: "100%",
        "& input": {
            height: "45px",
        },
    },
    UploadBox: {
        border: "solid 0.5px #707070",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "110px",
    },
    input_fild22: {
        width: "100%",
        "& input": {
            height: "45px",
            border: 0,
        },
        "& .MuiInput-underline:before": {
            border: 0,
        },
    },
    dlflex: {
        "& div": {
            marginTop: "2rem",
            "& span": {
                border: "1px solid #e8e7e7",
                fontSize: "20px",
                padding: "7px",
                marginRight: "6px",
            },
        },
    },
    donation: {
        '& span': {
            fontSize: "12px",
            padding: "2px 5px",
            border: "1px solid #ccc",
        },
    },
    MuiButton:{
        containedSizeLarge :{
     
        [theme.breakpoints.down("xs")]: {
            padding: "8px 15px !important",
          },
    },
},
}));

export default function Login() {
    const [OpenAuction, setOpenAuction] = useState(false);
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box className={classes.LoginBox} mb={5}>
            <Box className={classes.masBoxFlex}>
                <Typography variant="h6">My Bundles</Typography>
                <Box display="flex">
                    <Button
                        variant="contained"
                        size="large"
                        color="primery"
                        component={Link}
                        to="/share-audience"
                        className="ml-10"
                    >
                        share for audience
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        onClick={() => setOpenAuction(true)}
                        className="ml-10"
                    >
                        add a bundle
                    </Button>
                </Box>
            </Box>
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}> <BundlesCard /></Grid>
                    <Grid item xs={12} md={3}> <BundlesCard /></Grid>
                    <Grid item xs={12} md={3}> <BundlesCard /></Grid>
                    <Grid item xs={12} md={3}> <BundlesCard /></Grid>
                </Grid>


            </Box>







            {/* add bundle */}

            {OpenAuction && (
                <Dialog
                    fullWidth="sm"
                    maxWidth="sm"
                    open={OpenAuction}
                    onClose={() => setOpenAuction(false)}
                    aria-labelledby="max-width-dialog-title"
                >
                    <DialogTitle className={classes.dailogTitle}>
                        Create a bundle
                    </DialogTitle>
                    <DialogContent>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <label> Bundles title</label>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <TextField
                                        id="standard-basic"
                                        placeholder="Bundles 1"
                                        className={classes.input_fild2}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <label>  Bundles Name</label>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <TextField
                                        id="standard-basic"
                                        placeholder="Basic Bundle"
                                        className={classes.input_fild2}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
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
                        <Box>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item xs={12} md={4}>
                                    <label> Duration</label>
                                </Grid>
                                <Grid item xs={12} md={8} className={classes.donation}>
                                <span>7 Days</span><span>14 Days</span><span>30 Days</span><span>60 Days</span><span>1 Year</span><span>Forever</span>
                                </Grid>
                            </Grid>
                        </Box>

                        <Box mb={2}>
                            <Grid container spacing={0}>
                                <Grid item xs={12} md={12}>
                                    <label>Upload a video/photo:</label>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Box className={classes.UploadBox}>
                                        <input
                                            accept="image/*"
                                            style={{ display: "none" }}
                                            id="raised-button-file"
                                            multiple
                                            type="file"
                                        />
                                        <label htmlFor="raised-button-file">
                                            <Button
                                                variant="text"
                                                color="primary"
                                                endIcon={<CloudUploadIcon />}
                                            >
                                                Upload
                                            </Button>
                                        </label>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box mb={2}>
                            <Grid container spacing={0}>
                                <Grid item xs={12} md={12}>
                                    <label>Details:</label>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <Box className={classes.UploadBox}>
                                        <TextField
                                            id="standard-basic"
                                            placeholder=""
                                            className={classes.input_fild22}
                                            multiline
                                            maxRows={4}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant="contained"
                            onClick={() => setOpenAuction(false)}
                            color="primary"
                            size="large"
                        >
                            cancel
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => setOpenAuction(false)}
                            color="secondary"
                            size="large"
                        >
                            Post
                        </Button>
                    </DialogActions>
                </Dialog>
            )}


        </Box>
    );
}
