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
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText'
import Slide from '@material-ui/core/Slide';
import Suspend from "./Suspend";
import SuspendCard from "src/component/SuspendCard";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
    cards: {
        border: "solid 0.5px #e5e3dd",
        backgroundColor: "#fff",
        padding: "10px",
        borderRadius: "10px",
        margin: "0 10px",
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
        '& h6': {
            marginBottom: "2px !important",
            fontSize: "14px !important",
           
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
    customModal: {
        '& .MuiDialog-paperWidthSm': {
            width: "1100px",
            minWidth: "300px",
            maxWidth: "100%",
        },
        '& .makeStyles-paper-70': {
            width: "1100px",
            minWidth: "300px",
            maxWidth: "100%",
        }

    },
    bttn:{
        display:"flex",
        justifyContent:"center"
    },
}));

export default function UsersCard(props) {
    const classes = useStyles();
    const [openBlock, setOpen1] = React.useState(false);
    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };
    return (
        <Box className={classes.cards} >
            <Link to="/auctionpage">
                <Box className={classes.sublink}> <Typography variant="h2">John Doe</Typography>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png" />
                        <Box></Box>
                    </figure>
                </Box>
            </Link>
            <Box className={classes.contantCard}>
                <Typography variant="h6" component="h6" style={{ color: "#792034", }} onClick={handleClickOpen1}>Bundle I</Typography>
                <Typography variant="h6" component="h6" style={{ color: "#000", }}>15  <span style={{ color: "#707070", fontWeight: "bold", }}>MAS</span></Typography>
                <Typography variant="h6" component="h6" style={{ color: "#000", }}><span style={{ color: "#707070", fontWeight: "bold", }}>Valid till </span>07/11/2021  </Typography>
                <Typography variant="body2" component="span" style={{ color: "#000", }}> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </Typography>
            </Box>



            <Dialog
                open={openBlock}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose1}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                className={classes.customModal}

            >
                <DialogContent className={classes.paper}>
                    <DialogContentText id="alert-dialog-slide-description">

                        <Box align="center" mb={2}>
                            <img src="images/user-profile.png" alt="" className="userimg" />
                            <Typography variant="h5" align="center" style={{ color: "#000" }}>Adams Berg</Typography>
                            <Typography variant="body2" component="span" align="center" style={{ color: "#792034" }}>Bio:</Typography>
                            <Typography variant="body2" component="p" align="center" style={{ color: "#707070" }}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum
                            </Typography>

                        </Box>
                        <Box align="center" mb={2}>
                            <Typography variant="body2" component="span" align="center" style={{ color: "#792034" }}>Available bundles:</Typography>
                            <Box mt={2}><Suspend /></Box>
                        </Box>
                        <Box align="center" mb={5}>
                            <Typography variant="h4" align="center" style={{ lineHight: "30px", size: "20px", color: "#000000" }}>Your Subscription</Typography>
                            <Box mt={2}><SuspendCard /></Box>
                        </Box>

                        <Box align="center">
                        <Button
                                    variant="contained"
                                    size="large"
                                    color="primery"
                                    className="  ml-10"
                                    onClick={handleClose1}
                                >
                                   make a generic donation
                                </Button>
                                <Button
                                    variant="contained"
                                    size="large"
                                    color="secondary"
                                    className=" ml-10"
                                    onClick={handleClose1}
                                >
                                  Upgrade now
                                </Button>
                        </Box>

                   

                    </DialogContentText>
                </DialogContent>
            </Dialog>



        </Box>
    );
}


