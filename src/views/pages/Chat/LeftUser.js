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
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Slide from '@material-ui/core/Slide';
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
    input_fild2:{
        width:"100%",
        '& input':{
            height: "45px",
        },
    },
}));

export default function Login() {
    const classes = useStyles();
  
    return (
        <Box className={classes.LoginBox}>
            <List className="userList">
                <ListItem className="active">
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        <Box></Box>
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>
                <ListItem>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        <Box></Box>
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>
                <ListItem>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>
                <ListItem>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>
                <ListItem>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>
                <ListItem>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>
                <ListItem>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>
                <ListItem>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>
                <ListItem>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>
                <ListItem>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>
                <ListItem>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>
                <ListItem>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>
                <ListItem>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>
                <ListItem>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>

                <ListItem>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>
                <ListItem>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>
                <ListItem>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>
                <ListItem>
                    <figure className="chatuser chatuser5">
                        <img src="images/user-profile.png"/>
                        
                    </figure>
                    <Typography variant="h6">Adams Berg</Typography>
                    <Box className="chat-number">5</Box>
                </ListItem>

            </List>
        </Box>




    );
}
