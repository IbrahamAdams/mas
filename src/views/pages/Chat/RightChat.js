import React from "react";
import {
    Box,
    Container,
    Button,
    TextField,
    Typography,
    makeStyles,
    Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Slide from '@material-ui/core/Slide';
import { FaRegGrin } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FiMoreHorizontal } from "react-icons/fi";
const useStyles = makeStyles((theme) => ({

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
    input_fild2: {
        width: "100%",
        '& input': {
            height: "45px",
        },
    },
}));

export default function Login() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <Box className={classes.LoginBox}>
            <Box className="footer-chat">
                <Box display="flex" alignItems="center">
                <figure className="chatuser ">
                        <img src="images/user-profile.png"/>
                        <Box></Box>
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                </Box>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
           <FiMoreHorizontal/>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Report Chat</MenuItem>
      </Menu>
            </Box>
            <Box className="chat-Box" >
                <Box className="left-Box">
                    <Box>Hey there! I am happy that you joined us!
                        <span>10:00pm 16/7/2020</span>
                    </Box>
                </Box>
                <Box className="right-Box">
                    <Box>It is a pleasure for me
                        <span>10:00pm 16/7/2020</span>
                    </Box>
                </Box>
                <Box className="left-Box">
                    <Box>Would you like me to make any videos?
                        <span>10:00pm 16/7/2020</span>
                    </Box>
                </Box>
                <Box className="right-Box">
                    <Box>I would like to learn anatomy of Illeum
                        <span>10:00pm 16/7/2020</span>
                    </Box>
                </Box>
                <Typography variant="body" component="p" style={{ color: "#707070", margin: "20px 0px", }} align="center">WED 17/7/2020</Typography>
                <Box className="left-Box">
                    <Box>Would you like me to make any videos?
                        <span>10:00pm 16/7/2020</span>
                    </Box>
                </Box>
                <Box className="right-Box">
                    <Box>I would like to learn anatomy of Illeum
                        <span>10:00pm 16/7/2020</span>
                    </Box>
                </Box>
                <Box className="left-Box">
                    <Box>Would you like me to make any videos?
                        <span>10:00pm 16/7/2020</span>
                    </Box>
                </Box>
                <Box className="right-Box">
                    <Box>I would like to learn anatomy of Illeum
                        <span>10:00pm 16/7/2020</span>
                    </Box>
                </Box>
            </Box>
            <Box className="footer-chat">
                <FaRegGrin />
                <Box className="uplodfile">
                    <input type="file" />
                    <ImAttachment />
                </Box>
                <input type="text" className="form-control" placeholder="Type a message" />
                <Button className="send-btn">Send</Button>
            </Box>

        </Box>




    );
}
