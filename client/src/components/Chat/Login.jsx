import React from "react";
import { Box, Typography, Paper, Button, TextField } from "@mui/material";
import useStyles from "./styles";

const Login = ({
  loggedInAs,
  onCustomBtnClick,
  setLoggedInAs,
  onLoggedInBtnClick,
  deleteSession,
}) => {
  const classes = useStyles();

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        className={classes.mainBg}
      >
        <Box className={classes.chatHeader}>
          <Typography
            sx={{ textAlign: "center" }}
            variant="h1"
            mt="14px"
            mb="14px"
          >
            Chat Section
          </Typography>
        </Box>
        <Paper
          sx={{
            marginTop: "40px",
            backgroundColor: "#56a977",
            height: "20vh",
            width: "30vw",
            padding: "40px",
          }}
        >
          <TextField
            className={classes.customTextField}
            name="loginname"
            sx={{ input: { color: "black" } }}
            variant="outlined"
            label="Enter name"
            fullWidth
            value={loggedInAs}
            onChange={(e) => setLoggedInAs(e.target.value)}
          />
          <Box sx={{ marginTop: "8px" }} display="flex">
            <Button
              variant="contained"
              color="secondary"
              size="small"
              sx={{ marginRight: "10px" }}
              onClick={onLoggedInBtnClick}
            >
              Enter with logged in name
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={onCustomBtnClick}
            >
              Enter with custom name
            </Button>
          </Box>
        </Paper>
        <Box sx={{ margin: "20px" }}>
          <Button
            sx={{ marginTop: "auto", marginLeft: "auto" }}
            variant="contained"
            color="info"
            size="large"
            onClick={deleteSession}
          >
            Delete Session
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
