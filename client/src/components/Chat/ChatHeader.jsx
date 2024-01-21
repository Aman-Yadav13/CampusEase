import React from "react";
import { Box } from "@mui/material";
import useStyles from "./styles";

const ChatHeader = () => {
  const classes = useStyles();
  return (
    <Box sx={{ border: "1px solid black" }} className={classes.infoBar}>
      Appbar
    </Box>
  );
};

export default ChatHeader;
