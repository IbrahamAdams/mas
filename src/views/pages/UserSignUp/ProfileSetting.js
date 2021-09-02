import React from 'react'
import {
  Box,
  Container,
  Grid,
  Button,
  TextField,
  makeStyles,
} from '@material-ui/core'
import { Link } from 'react-router-dom'
// import { Editor } from '@tinymce/tinymce-react'
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
      height: '45px',
    },
  },
  Button: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: '25px',
  },
  ButtonBtn: {
    paddingTop: '30px',
    paddingRight: '10px',
    width: '200px',
  },
  name: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    color: '#141518',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
    '& p': {
      fontSize: '15px',
      color: '#707070',
      paddingLeft: '5px',
    },
  },
  inputbox: {
    width: '100%',
    height: '150px',
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '-75px',
  },
  coverpic: {
    width: '100%',
  },
  profilepic: {
    width: '127.7px',
    height: '127.7px',
  },
  CoverBox: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  coverEdit: {
    color: '#ffffff',
    marginTop: '-40px',
    padding: '10px',
    position:"relative",
    '& input':{
      position: "absolute",
      left:"0",
      top:"0",
      width:"100%",
      height:"100%",
      opacity:"0",
    },
  },
  profileFoto:{
    position:"relative",
    '& input':{
      position: "absolute",
      left:"0",
      top:"0",
      width:"100%",
      height:"100%",
      opacity:"0",
    },
  },
  Box: {
    width: '100%',
    height: '125px',
    backgroundImage: 'linear-gradient(to bottom, #c04848, #480048)',
  },
}))

export default function Login() {
  const classes = useStyles()
  return (
    <Box className={classes.LoginBox}>
        <Grid className={classes.CoverBox}>
          <Box className={classes.Box}></Box>
          <Box className={classes.coverEdit}>Edit cover Photo <input type="file"/></Box>
        </Grid>
      <Container maxWidth="xl">
      
        <Box className={classes.profile}>
          <img
            className={classes.profilepic}
            src="/images/users/profilepic1.svg"
            alt=""
          />
          <Box className={classes.profileFoto}>Edit cover Photo <input type="file"/></Box>
        </Box>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={12} md={1}>
              <label className={classes.name}> Name :</label>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                id="standard-basic"
                placeholder="Adams Berg"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Adams Berg")}
                className={classes.input_fild2}
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={12} md={1}>
              <label className={classes.name}> Email :</label>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                id="standard-basic"
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "adamsberg@mas.com")}
                placeholder="adamsberg@mas.com"
                className={classes.input_fild2}
              />
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <label className={classes.name}>
                MAS Page URL : <p>‎‎‎https://apps.masplatform.io/</p> &nbsp;
                <TextField id="outlined-basic" autoFocus="true" />
              </label>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={1}  style={{alignItems:"center"}}>
            <Grid item xs={12} md={4}>
              <label className={classes.name}> BIO :</label>
              <TextField
                id="outlined-multiline-static"
                focused="true"
                multiline
                rows={4}
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Type a text")}
                placeholder="Type a text"
                variant="outlined"
                className={classes.inputbox}
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={1} style={{alignItems:"center"}}>
            <Grid item xs={12} md={6}>
              <Link className={classes.name} style={{textDecoration:"underline",}}
               to="/socialaccounts"
              >Social Link</Link>
            </Grid>
            <Grid item xs={12} md={6}>
            <Box className={classes.Button}>
            <Box className={classes.ButtonBtn}>
              <Button
                variant="contained"
                size="large"
                color="primery"
                className="btn-block btnWidth removeredius"
                component={Link}
                to="/home"
              >
                Cancel
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
                to="/home"
              >
                Apply
              </Button>
            </Box>
          </Box>
            </Grid>
          </Grid>

         
        </Box>
      </Container>
    </Box>
  )
}
