import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useStyles from "./styles";
import Input from "./Input";
import Icon from "./icon";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { signin, signup } from "../../actions/auth";
import { tokens } from "../../theme";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = ({ isAuthPage, setIsAuthPage }) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const isVITMail = true;

  useEffect(() => {
    setIsAuthPage((prevIsAuthPage) => !prevIsAuthPage);
  }, []);

  const handleSubmit = (e) => {
    if (isSignUp && formData.email.includes("vitstudent.ac.in")) {
      dispatch(signup(formData, history));
      setIsAuthPage(false);
      history("/");
    } else if (formData.email.includes("vitstudent.ac.in")) {
      dispatch(signin(formData, history));
      setIsAuthPage(false);
      history("/");
    } else {
      window.alert(
        "You can only login through specific domain (vitstudent.ac.in)"
      );
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //Whenever changing a prev state , callback to be used
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />

                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
            {isSignUp && (
              <>
                <Input
                  name="contact"
                  label="Contact Information"
                  handleChange={handleChange}
                  type="text"
                />
              </>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {" "}
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Dont  have an account ? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
