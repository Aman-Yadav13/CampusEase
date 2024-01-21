import React from "react";
import { Box } from "@mui/material";
import useStyles from "./styles";

const ChatContainer = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.subContainer}>
        <Box className={classes.content}>{props.children}</Box>
      </Box>
    </Box>
  );
};

export default ChatContainer;
