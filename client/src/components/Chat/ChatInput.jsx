import React from "react";
import { Box, Button } from "@mui/material";
import useStyles from "./styles";

const ChatInput = ({ message, setMessage, sendMessage }) => {
  const classes = useStyles();

  return (
    <Box classes={classes.chatInput}>
      <input
        id="messageInput"
        name="message"
        placeholder="Type your message..."
        label="message"
        value={message}
        className={classes.textField}
        onChange={({ currentTarget: input }) => {
          setMessage(input.value);
        }}
        onKeyPress={(e) => (e.code === "Enter" ? sendMessage() : null)}
      />
      <Button
        variant="contained"
        size="large"
        type="submit"
        sx={{ minWidth: "182px", borderRadius: "0" }}
        onClick={sendMessage}
      >
        Send
      </Button>
    </Box>
  );
};

export default ChatInput;
