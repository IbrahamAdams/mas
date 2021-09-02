import React from "react";
import {
    Box,
    Container,
    Button,
    TextField,
    Typography,
    makeStyles,
    Grid,
    List,
    ListItem,
    Dialog,
    DialogContent,
    DialogContentText,
    Slide,
    IconButton,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import History from "./History";
import Profile from "./Profile";
import { MdReport } from "react-icons/md";
import { GrFormAdd } from "react-icons/gr";
import { FiMinus } from "react-icons/fi";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const useStyles = makeStyles((theme) => ({
    LoginBox: {
        paddingTop: "110px",
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
    NFTbg: {
        width: "100%",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "40px",
        fontWeight: "500",
        color: "#fff",
        marginBottom: "20px",
        // backgroundImage: "linear-gradient(to bottom, #4fc5c5, #286363)",
        backgroundImage: "linear-gradient(to right, #c04848 , #480048)"
    },
    modaltitel: {
        fontSize: "30px",
        fontWeight: "600",
        marginBottom: "10px",
        textAlign: "center",
        color: "#141518",
        [theme.breakpoints.down('sm')]: {
            fontSize: "20px",
        },
    },
    timeing: {
        display: "flex",
        '& li': {
            backgroundColor: "#fff",
            border: "solid 0.5px #e5e3dd",
            fontSize: "20px",
            textAlign: "center",
            width: "auto",
            padding: "10px 15px",
            marginLeft: "3px",
            color: "#141518",
            [theme.breakpoints.down('sm')]:{
                padding: "5px",
                fontSize: "12px",
            },
        },
    },
    labelText: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#000",
        alignItems: "center",
    },
    price: {
        fontSize: "45px",
        fontWeight: "normal",
        textAlign: "center",
        color: "#d15b5b",
    },
    masBox: {
        backdropFilter: " blur(15px)",
        border: "solid 0.5px #e5e3dd",
        backgroundColor: "#fff",
        padding: "40px 20px",
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
    timeBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
    dilogBody2:{
        boxShadow: "0 1.5px 3px 0 rgb(0 0 0 / 16%)",
    backgroundImage: "linear-gradient(to bottom, #c04848, #480048)",
    borderRadius: "50px",
    overflow:"hidden",
    },
    dilogBody3:{
        backgroundColor:"#3e3e3e",
    },
    table:{
        '& th':{
            color:"#fff",
        },
        '& td':{
            color:"#fff",
        },
    },

}));
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Login() {
    const [openBlock, setOpen1] = React.useState(false);
    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };


    const [openBlock2, setOpen2] = React.useState(false)
    const handleClickOpen2 = () => {
        setOpen2(true)
    }

    const handleClose2 = () => {
        setOpen2(false)
    }


    const [openBlock3, setOpen3] = React.useState(false)
    const handleClickOpen3 = () => {
        setOpen3(true)
    }

    const handleClose3 = () => {
        setOpen3(false)
    }


    const [openBlock4, setOpen4] = React.useState(false)
    const handleClickOpen4 = () => {
        setOpen4(true)
    }

    const handleClose4 = () => {
        setOpen4(false)
    }
    const [open5, setOpen5] = React.useState(false);
 
    const handleClickOpen5 = () => {
        setOpen5(true);
    };
    const handleClose5 = () => {
        setOpen5(false);
    };
    const classes = useStyles();
    return (
        <Box className={classes.LoginBox}>
            <Container maxWidth="lg"> <Box className={classes.NFTbg}>$NFT</Box>
                <Typography variant="h3" className={classes.modaltitel}>NFT ART TITLE</Typography>

                <Box mb={3}>
                    <label className={classes.labelText}>Details:</label>
                    <Typography variant="body2" component="p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </Box>
                <Grid container style={{ alignItems: "flex-end", }}>
                    <Grid item xs={12} md={1}>
                        <label className={classes.labelText}>Time left:</label>
                    </Grid>
                    <Grid item xs={12} md={11}>
                        <List className={classes.timeing}>
                            <ListItem>10 days</ListItem>
                            <ListItem>23</ListItem>
                            <ListItem>00</ListItem>
                            <ListItem>40</ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Box align="center"> <label className={classes.labelText} align="center">starting price</label>
                    <Typography variant="body1" component="p" className={classes.price}>0.05 BTC</Typography>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"

                        className=""
                        onClick={handleClickOpen1}
                    >
                        Bid Now
                    </Button> 
                  <Box mt={2}>  <span>ETH fees and  <Link style={{ color: "#000", textDecoration: "underline", }} onClick={handleClickOpen5}> MAS fees</Link>  apply.</span></Box>
                </Box>
                <Box mb={5}>
                    <History />
                </Box>
                <Box className={classes.masBox}>
                    <Grid container spacing="2">
                        <Grid item xs={12} md={4} align="center">
                            <Button
                                startIcon={<img src="images/IPFS.png" />}
                                style={{ fontSize: "20px", color: "#000", }}
                            >
                                View on IPFS
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={4} align="center">
                            <Button
                                startIcon={<img src="images/eth.png" />} style={{ fontSize: "20px", color: "#000", }}
                            >
                                View on etherscan
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={4} align="center">
                            <Button
                                onClick={handleClickOpen2}
                                startIcon={<MdReport style={{ fontSize: "30px", color: "#000", }} />}
                                style={{ fontSize: "20px", color: "#000", }}
                            >
                                Report
                            </Button>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
            <Box mt={5}>
                <Profile />
            </Box>


            {/* bit modal */}
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
                        <Box className={classes.NFTbg}>$NFT</Box>
                        <Typography variant="h3" className={classes.modaltitel}>NFT ART TITLE</Typography>
                        <Box mb={3}>
                            <label className={classes.labelText}>Details:</label>
                            <Typography variant="body2" component="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Typography>
                        </Box>
                        <Box className={classes.timeBox}>
                            <Box item xs={12} md={1}>
                                <label className={classes.labelText}>Time left:</label>
                            </Box>
                            <Box item xs={12} md={11}>
                                <List className={classes.timeing}>
                                    <ListItem>10 days</ListItem>
                                    <ListItem>23</ListItem>
                                    <ListItem>00</ListItem>
                                    <ListItem>40</ListItem>
                                </List>
                            </Box>
                        </Box>
                        <Box align="center"> <label className={classes.labelText} align="center">starting price</label>
                            <Typography variant="body1" component="p" className={classes.price}>0.05 BTC</Typography>

                        </Box>
                        <Container>
                            <Box paddingTop="30px">
                                <Grid container spacing={6} alignItems="center">
                                    <Grid item xs={12} md={4}>
                                        <Typography
                                            variant="contained"
                                            size="large"
                                            color="primery"

                                            className="btn-none btnWidth removeredius"
                                        >
                                            Delete auction
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={4} align="right">
                                        <Button
                                            variant="contained"
                                            size="large"
                                            color="primery"
                                            onClick={handleClose1}
                                            className="btn-block btnWidth removeredius"
                                        >
                                            Cancel
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} md={4}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            color="secondary"
                                            onClick={handleClickOpen3}
                                            className="btn-block btnWidth removeredius"
                                        >
                                            Apply
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Container>
                    </DialogContentText>
                </DialogContent>
            </Dialog>


            {/* report modal */}
            <Dialog
                open={openBlock2}
                TransitionComponent={Transition}
                keepMounted
                fullWidth="sm"
                maxWidth="sm"
                onClose={handleClose2}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent className={classes.paper}>
                    <DialogContentText id="alert-dialog-slide-description">
                        <Typography variant="h3" className={classes.modaltitel}>
                            Report
                        </Typography>
                        <Box>
                            <label>select a problem</label>
                            <Box className="reposr-btn">
                                <Button>NSFW</Button>
                                <Button>Anti religions</Button>
                                <Button className="active">copyright violation</Button>
                                <Button>Other</Button>
                            </Box>
                        </Box>
                        <Box mt={4}>
                            <label>Comments</label>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                className={classes.input_fild}
                                variant="outlined"
                            />
                        </Box>
                        <Box mt={2} className={classes.btnBox} align="center">
                            <Button
                                variant="contained"
                                size="large"
                                color="secondary"
                                className=" "
                                onClick={handleClose2}
                            >
                                Confirm your report
                            </Button>
                        </Box>
                    </DialogContentText>
                </DialogContent>
            </Dialog>

            {/* approve bid modal */}
            <Dialog
                open={openBlock3}
                TransitionComponent={Transition}
                keepMounted
                fullWidth="sm"
                maxWidth="sm"
                onClose={handleClose3}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent className={classes.paper}>
                    <DialogContentText id="alert-dialog-slide-description">
                        <Typography variant="h3" className={classes.modaltitel}>
                            Joe 593
                        </Typography>
                        <Box align="center"> <label className={classes.labelText} align="center">Bid:</label>
                            <Typography variant="body1" component="p" className={classes.price}>0.35 BTC</Typography>

                        </Box>
                        <Box mt={2} className={classes.btnBox} align="center">
                            <Button
                                variant="contained"
                                size="large"
                                color="secondary"
                                className=" "
                                onClick={handleClickOpen4}
                            >
                                approve bid
                            </Button>
                        </Box>
                    </DialogContentText>
                </DialogContent>
            </Dialog>



            {/*bid modal */}
            <Dialog
                open={openBlock4}
                TransitionComponent={Transition}
                keepMounted
                fullWidth="sm"
                maxWidth="sm"
                onClose={handleClose4}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent className={classes.paper}>
                    <DialogContentText id="alert-dialog-slide-description">
                        <Typography variant="h3" className={classes.modaltitel}>
                            Bid
                        </Typography>
                        <Box className={classes.nftimg}>
                            <img src="images/Profilebg.png" />
                        </Box>
                        <Box mt={3} className="bitText">
                            <Typography variant="body" componant="p">0.05 BTC</Typography>
                          <Box>
                          <IconButton color="primary" aria-label="upload picture" component="span">
                                <GrFormAdd />
                            </IconButton>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <FiMinus />
                            </IconButton>
                          </Box>
                        </Box>
                        <Box mt={2} className={classes.btnBox} align="center">
                            <Button
                                variant="contained"
                                size="large"
                                color="secondary"
                                className=" "
                                onClick={handleClose4}
                            >
                                Confirm your bid
                            </Button>
                        </Box>
                    </DialogContentText>
                </DialogContent>
            </Dialog>



                {/* mas table */}

                <Dialog
                open={open5}
                fullWidth="md"
                maxWidth="md"
                onClose={handleClose5}
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
                                            <Typography style={{display:"flex", justifyContent:"center",}} alignItems="center">GOLD <img src="images/gold-check.svg" style={{marginLeft:"5px",width:"25px"}} /></Typography>
                                        </TableCell>
                                        <TableCell align="center">3%</TableCell>
                                        <TableCell align="center">0%</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >DIAMOND
                                        </TableCell>
                                        <TableCell align="center">0</TableCell>
                                        <TableCell align="center" >
                                            <Typography style={{display:"flex", justifyContent:"center",}} alignItems="center">DIAMOND <img src="images/blue-check.svg" width="25" style={{marginLeft:"5px"}} /></Typography>
                                        </TableCell>
                                        <TableCell align="center">3%</TableCell>
                                        <TableCell align="center">0%</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell >MAS PLUS
                                        </TableCell>
                                        <TableCell align="center">0</TableCell>
                                        <TableCell align="center" >
                                            <Typography style={{display:"flex", justifyContent:"center",}} alignItems="center">MAS PLUS <img src="images/blue-check.svg" width="25" style={{marginLeft:"5px"}} /></Typography>
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
