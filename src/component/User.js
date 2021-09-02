import React from 'react'
import { Grid, Box, makeStyles, Avatar, Typography, Button } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';



const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },

    pLeft20: {
        paddingLeft: "30px",
    },
    borderBotm: {
        borderBottom: "1px solid #ccc",
        paddingBottom: "10px",
        marginBottom: 10,
    },
  
}))

export default function UsersCard(props) {
    const classes = useStyles()
   
    return (

        <Box>
            <Grid container alignItems="center" className={classes.borderBotm}>
                <Grid item xs={12} md={10}>
                    <Grid container alignItems="center">
                        <Grid item xs={12} md={1}>
                            <figure className="chatuser chatuser3 ">
                                <img src="images/user-profile.png" />
                                <Box></Box>
                            </figure>
                        </Grid>
                        <Grid item xs={12} md={10} className={classes.pLeft20}>
                            <Typography variant="h4" component="h4" style={{ cursor: "pointer" }} >Adams berg - The happy doctor</Typography>
                            <Typography variant="body" component="span">This is a bio</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Box align="center">
                        <Typography variant="h6" component="h6">300</Typography>
                        <Typography variant="span" component="span">subscribers</Typography>
                    </Box>
                </Grid>
            </Grid>


         

        </Box>



    )
}
