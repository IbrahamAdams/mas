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
    connectBox: {
        display: "flex",
        justifyContent: " center",
        alignItems: "center",
        height: "60vh",
        '& h5': {
            fontSize: "20px",
            fontWeight: "500",
            color: "#000",
        },
        '& button': {
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
    input_fild2: {
        width: "100%",
        '& input': {
            // height: "45px",
        },
    },
    btnflex: {
        display: "flex",
        justifyContent: "flex-end",
        [theme.breakpoints.down('sm')]: {
            justifyContent: "center",
        },
    },
    labeltext: {
        fontSize: "20px",
        fontWeight: "500",
        color: "#000",
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
                <Typography variant="h3" className={classes.modaltitel}>Create your account</Typography>



                <Grid container >
                    <Grid item xs={12} md={8}>
                        <Box>
                            <label className={classes.labeltext}>Your ETH wallet address</label>
                            <TextField id="standard-basic"
                              onFocus={(e) => (e.target.placeholder = "")}
                              onBlur={(e) => (e.target.placeholder = "0x93c3a3cd2463963787391532d06859684bbc2fa2")}
                              placeholder="0x93c3a3cd2463963787391532d06859684bbc2fa2"
                                className={classes.input_fild2} />
                        </Box>
                        <Box>
                            <label className={classes.labeltext}>Username</label>
                            <TextField id="standard-basic"
                                placeholder=""
                                className={classes.input_fild2} />
                        </Box>
                        <Box>
                            <label className={classes.labeltext}>Your email account</label>
                            <TextField id="standard-basic"
                                placeholder=""
                                className={classes.input_fild2} />
                        </Box>
                        <Box className={classes.btnflex} mt={5}>
                            <Button
                                variant="contained"
                                size="large"
                                color="secondary"
                                className="widthsame ml-10"
                                component={Link}
                                to="/profilesettings"
                            >
                                Sign up
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>



         


        </Box>
    )
}
