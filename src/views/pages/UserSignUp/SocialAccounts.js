import React from 'react'
import {
  Box,
  Container,
  Grid,
  Button,
  Typography,
  TextField,
  makeStyles,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook'
import TelegramIcon from '@material-ui/icons/Telegram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
const useStyles = makeStyles((theme) => ({
  LoginBox: {
    paddingBottom: "50px",
  },
  basic: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: '30px',
    paddingTop: '20px',
    color: '#141518',
  },
  input_fild2: {
    width: '100%',
    '& input': {
      height: '5px',
    },
  },
  name: {
    alignContent: 'end',
  },
  Button: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  ButtonBtn: {
    paddingTop: '100px',
    paddingRight: '10px',
    width: '200px',
    alignItems: 'right',
  },
  inputsocial: {
    display: 'flex',
    alignItems: 'center',
  },
  iconalign: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '50px',
  },
  icon: {
    padding: '10px',
    color:"#000",
  },
}))

export default function Login() {
  const classes = useStyles()
  return (
    <Box className={classes.LoginBox}>
      <Container maxWidth="xl">
        <Typography variant="h4" className={classes.basic}>
          Social Accounts
        </Typography>
        <Box className={classes.inputsocial}>
          <Grid container>
            <Grid className={classes.iconalign} item xs={12} sm={4}>
              <FacebookIcon className={classes.icon} />
              <TextField
                id="standard-basic"
                placeholder="facebook link"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "youtube channel link")}
                className={classes.input_fild2}
              />
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.inputsocial}>
          <Grid container>
            <Grid className={classes.iconalign} item xs={12} sm={4}>
              <TwitterIcon className={classes.icon} />
              <TextField
                id="standard-basic"
                placeholder="twitter handle"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "youtube channel link")}
                className={classes.input_fild2}
              />
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.inputsocial}>
          <Grid container>
            <Grid className={classes.iconalign} item xs={12} sm={4}>
              <TelegramIcon className={classes.icon} />
              <TextField
                id="standard-basic"
                placeholder="telegram handle"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "youtube channel link")}
                className={classes.input_fild2}
              />
            </Grid>
          </Grid>
        </Box>
        <Box className={classes.inputsocial}>
          <Grid container>
            <Grid className={classes.iconalign} item xs={12} sm={4}>
              <YouTubeIcon className={classes.icon} />
              <TextField
                id="standard-basic"
                placeholder="youtube channel link"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "youtube channel link")}
                className={classes.input_fild2}
              />
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Grid className={classes.Button}>
            <Box className={classes.ButtonBtn}>
              <Button
                variant="contained"
                size="large"
                color="primery"
                className="btn-block btnWidth removeredius"
                component={Link}
                to="/basicinfo"
              >
                Back
              </Button>
            </Box>
            <Box className={classes.ButtonBtn}>
              <Button
                variant="h6"
                variant="contained"
                size="large"
                color="secondary"
                className="btn-block btnWidth removeredius"
                component={Link}
                to="/profilesettings"
              >
                Save
              </Button>
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
