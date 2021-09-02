import React from 'react'
import User from 'src/component/User'
import {
  Box,
  Container,
  Typography,
  makeStyles,
  InputBase,
} from '@material-ui/core'
import { Search } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  search: {
    border: "0.5px solid #e5e3dd",
    display: "flex",
    alignItems: "center",
    borderRadius: "6.5px",
  },
  input_fild: {
    backgroundColor: '#ffffff6e',
    borderRadius: '5.5px',
    border: ' solid 0.5px #e5e3dd',
    color: '#141518',
    height: '48px !important',
    width: '100%',
    maxWidth: "500px",
    margin: "auto",
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'transparent',
      },
    },
    '& .MuiInputBase-input': {
      color: '#141518',
      height: '34px !important',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'transparent',
      borderWidth: 0,
    },
  },
  LoginBox: {
    paddingBottom: "50px",
    '& h6': {
      fontWeight: 'bold',
      marginBottom: '10px',
      '& span': {
        fontWeight: '300',
      },
    },
  },
  divider: {
    padding: '20px 10px',
  },
  TokenBox: {
    border: 'solid 0.5px #e5e3dd',
    padding: '5px',
  },
  header: {
    textAlign: 'center',
  },

}))

export default function Login() {
  const classes = useStyles()

  return (
    <Box className={classes.LoginBox} mb={5}>
      <Container maxWidth="sm">
        <Box>
          <h3 className={classes.header}>Results For:</h3>
          <Box textAlign="center" mb={3}>


            <div className={classes.search}>
              <Search />
              <InputBase
                fullWidth
                placeholder="Adams berg"
              />
            </div>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <Box align="center" mt={4} mb={5}>
          <Typography variant="h1" style={{ color: "#000", marginBottom: "10px", }}>NO USERS FOUND!</Typography>
          <img src="images/noresult.png" />
        </Box>
        <User />
        <User />
        <User />
        <User />
      </Container>







    </Box>
  )
}
