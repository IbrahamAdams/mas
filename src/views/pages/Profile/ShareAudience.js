
import React from 'react'
import {
  Box,
  Container,
  Grid,
  Button,
  Typography,
  TextField,
  makeStyles,
  InputAdornment,
} from '@material-ui/core'
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// import { Editor } from '@tinymce/tinymce-react'
const useStyles = makeStyles((theme) => ({
    input_fild: {
        backgroundColor: "#ffffff6e",
        borderRadius: "5.5px",
        border: " solid 0.5px #e5e3dd",
        color: "#141518",
        // height: "48px",
        width: "100%",
        maxWidth: "500px",
        margin: "0 auto",
        borderRadius: "20px",
        "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "transparent",
            },
        },
        "& .MuiInputBase-input": {
            color: "#141518",
            height: "34px",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            borderWidth: 0,
        },
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
    width: '200px',
  },
  name: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    paddingTop:"10px",
    color: '#141518',
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
  LoginBox: {
      paddingBottom:"50px",
  },
  UploadBox: {
    border: "solid 0.5px #707070",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "110px",
    position:"relative",
    "& input":{
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      opacity: "0",
    },
  },
}))

export default function Login() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };
  return (
    <Box className={classes.LoginBox}>
      <Container maxWidth="xl">
        <Typography variant="h4" className={classes.basic}>
        Share with your audience
        </Typography>
        <Box className>
          <Box mt={5}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={1}>
                <label className={classes.name}> Title:</label>
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  id="standard-basic"
                  placeholder=""
                  className={classes.input_fild2}
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={12} md={5}>
                <label className={classes.name}> Details: </label>
                <TextField
                  id="outlined-multiline-static"
                  focused="true"
                  multiline
                  rows={4}
                  variant="outlined"
                  className={classes.inputbox}
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={12} md={5}>
                <label className={classes.name}> Upload a video/photo: </label>
                <Box className={classes.UploadBox}>
                                        <input
                                            accept="image/*"
                                            id="raised-button-file"
                                            multiple
                                            type="file"
                                        />
                                        <span htmlFor="raised-button-file">
                                            <Button
                                                variant="text"
                                                color="primary"
                                                endIcon={<CloudUploadIcon />}
                                            >
                                                Upload
                                            </Button>
                                        </span>
                                    </Box>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <label className={classes.name}>Select a bundle to share with: </label>
              <Box className="box-select">
                  <Box>Bundle I</Box>
                  <Box>Bundle II</Box>
                  <Box>Bundle III</Box>
                  <Box className="active">Bundle IV <span>Selected</span></Box>
                  <Box className="active">Bundle V <span>Selected</span> </Box>
              </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

            <Box  align="center" mt={5}>
              <Button
                variant="h6"
                variant="contained"
                size="large"
                color="secondary"
                style={{minWidth:"200px"}}
              >
               Share
              </Button>
            </Box>
      </Container>



    
    </Box>
  )
}
