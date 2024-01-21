import React, { useEffect, useState } from "react";
import { bgscript } from "./index";
import "./styles.css";
import { useTheme, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { tokens } from "../../theme";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import symboll from "../../images/symboll.png";

// import useStyles from "./styles";

const CustomisedButton = styled(Button)(({ colors }) => ({
  backgroundColor: colors.greenAccent[600],
  "&:hover": {
    backgroundColor: colors.greenAccent[700],
  },
}));

const Background = ({ isAuthPage, setIsAuthPage }) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history("/");
    setUser(null);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const handleSignIn = () => {
    setIsAuthPage(true);
    navigate("/auth");
  };

  useEffect(() => {
    bgscript();
  }, []);

  return (
    <div id="large-header" className="large-header">
      <canvas id="demo-canvas"></canvas>
      <Box marginTop="300px" display="flex" flexDirection="column">
        <p className="slogan">
          WHERE
          <br />
          CAMPUS
          <br />
          MEETS
          <br />
          CONVENIENCE
          <br />
        </p>
        <img className="symbol" src={symboll} alt="icon" />
      </Box>
      {user ? (
        <CustomisedButton
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            marginRight: "65px",
            marginBottom: "60px",
          }}
          colors={colors}
          variant="contained"
          size="large"
          onClick={logout}
        >
          <Typography variant="h3" sx={{ textTransform: "none" }}>
            Logout{" "}
          </Typography>
        </CustomisedButton>
      ) : (
        <CustomisedButton
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            marginRight: "65px",
            marginBottom: "60px",
          }}
          colors={colors}
          variant="contained"
          size="large"
          onClick={handleSignIn}
        >
          <Typography variant="h3" sx={{ textTransform: "none" }}>
            Sign In
          </Typography>
        </CustomisedButton>
      )}
    </div>
  );
};

export default Background;
