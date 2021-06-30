import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContextProvider, useAuth } from "../../userContext";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import API from "../../utils/API";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://gregstead.github.io">
        Greg Stead
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUpSide() {
  const { setAuthTokens } = useAuth();
  const classes = useStyles();
  const history = useHistory();
  const [signupState, setSignupState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",

  });

  const [isError, setIsError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    API.createNewUser(signupState)
      .then((result) => {
        setSignupState({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
        if (result.status === 200) {
          sessionStorage.setItem("_id", result.data._id);

          setAuthTokens(result.data);

          history.push("/dashboard");
        } else {
          setIsError(true);
        }
      })
      .catch((err) => {
        console.error(err);
        setIsError(true);
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setSignupState({
      ...signupState,
      [name]: value,
    });
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate>
          <TextField
              
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="first name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="last name"
              name="lastName"
              autoComplete="lastName"
              
              onChange={handleChange}
            />
            <TextField
              
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              
              onChange={handleChange}
            />
            <TextField
              
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign up!"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
