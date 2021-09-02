import React from 'react'
import {
    Box,
    Container,
    Button,
    TextField,
    makeStyles,
    Grid,
    Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
            fontSize: "20px",
            fontWeight: "500",
            color: "#000",
        },
        '& button':{
            height: "54.5px",
            width: "237.5px",
        }
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
    input_fild2:{
        width:"100%",
        color:"#000",
        '& input':{
            // height: "45px",
        },
    },
    btnflex:{
        display:"flex",
        justifyContent:"flex-end",
        [theme.breakpoints.down('sm')]: {
            justifyContent:"center",
        },
    },
    labeltext:{
        fontSize: "20px",
        fontWeight: "500",
        color: "#000",
    },
    paper:{
        display: "flex",
    alignItems: "center",
    '& a':{
        fontWeight: "700",
        textDecoration: "underline",
        color: "#000",
    },
        '& label':{
            paddingTop:"0 !important",
            color: "#141518",
        },
    },
    
}))
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function Login() {
    const classes = useStyles()
    const [openBlock, setOpen1] = React.useState(false);
    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
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
                <Typography variant="h3" className={classes.modaltitel}>Your wallet is now connected</Typography>



                <Grid container >
                    <Grid item xs={12} md={8}>
                        <Box>
                        <label className={classes.labeltext}>Current ETH wallet address</label>
                        <TextField id="standard-basic"
                         onFocus={(e) => (e.target.placeholder = "")}
                         onBlur={(e) => (e.target.placeholder = "0x93c3a3cd2463963787391532d06859684bbc2fa2")}
                         placeholder="0x93c3a3cd2463963787391532d06859684bbc2fa2"
                                className={classes.input_fild2} />
                        </Box>
                        <Box className={classes.btnflex} mt={5}>
                        <Button
                            variant="contained"
                            size="large"
                            color="primery"
                            className="widthsame"
                            onClick={handleClickOpen1}
                        >
                            Skip
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            className="widthsame ml-10"
                            component={Link}
                            to="/create-account"
                        >
                            Continue
                        </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>


            <Dialog
                open={openBlock}
                TransitionComponent={Transition}
                keepMounted
                fullWidth="sm"
                maxWidth="sm"
                onClose={handleClose1}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"

            >
                <DialogContent >
                    <DialogContentText id="alert-dialog-slide-description">
                        <img src="images/centerimg.png" className="centerimg" />

                        <Box >
                            <Typography variant="h6" style={{color: "#792034",marginBottom:"10px",}}>Last step to create your account</Typography>
                            <Typography variant="body" component="p" align="center" style={{fontSize:"14px",}}>Before creating your account,
                                you should agree to our terms of service, privacy
                                policy and risk disclosure statements. </Typography>
                        </Box>
                        <Box className={classes.paper} mt={3}>
                            <FormControlLabel
                                control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
                            />
                            <label>I have read and agree to <Link>Terms of service</Link></label>
                        </Box>
                        <Box  className={classes.paper}>
                            <FormControlLabel
                                control={<Checkbox  onChange={handleChange} name="gilad" />}
                            />
                            <label>I have read and agree to <Link>Privacy policy</Link></label>
                        </Box>
                        <Box className={classes.paper}>
                            <FormControlLabel
                                control={<Checkbox  onChange={handleChange} name="gilad" />}
                            />
                            <label>I have read and agree to <Link>Risk disclosure statement</Link></label>
                        </Box>
                        <Box  className={classes.paper}>
                            <FormControlLabel
                                control={<Checkbox  onChange={handleChange} name="gilad" />}
                            />
                            <label>I have read and agree to <Link>KYC program</Link></label>
                        </Box>
                        <Box  className={classes.paper} mt={5}>
                            <FormControlLabel
                                control={<Checkbox  onChange={handleChange} name="gilad" />}
                            />
                            <label>Read and agree to all</label>
                        </Box>
                        <Box mt={2} mb={5} pb={3} className={classes.btnBox} >
                            <Button
                                variant="contained"
                                size="large"
                                color="secondary"
                                className="btn-block "
                                component={Link}
                                to="/home"
                            >
                                Continue
                            </Button>
                        </Box>
                    </DialogContentText>
                </DialogContent>
            </Dialog>

        </Box>
    )
}
