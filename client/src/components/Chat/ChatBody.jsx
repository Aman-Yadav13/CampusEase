import React from "react";
import { Box } from "@mui/material";
import useStyles from "./styles";
import ScrollableFeed from "react-scrollable-feed";

const ChatBody = (props) => {
  const classes = useStyles();
  return (
    <Box
      sx={{ border: "1px solid black", borderTop: "none" }}
      className={classes.subContent}
    >
      <Box className={classes.usersInfo}>You are {props?.crUser?.username}</Box>
      <Box className={classes.chatBox}>
        <div className={classes.chatMessagesSection}>
          <ScrollableFeed>
            <div className={classes.chatMessagesSubSection}>
              {props.messages?.map((message, index) => {
                return message.type === "UserStatus" ? (
                  <div key={index} className={classes.userStatusText}>
                    <span>
                      {message.userId === props.crUser.userId
                        ? "You have Joined!"
                        : `${message.username} has joined!`}
                    </span>
                  </div>
                ) : (
                  <div
                    key={index}
                    className={
                      message.userId === props.crUser.userId
                        ? classes.chat_message_right
                        : classes.chat_message_left
                    }
                  >
                    <div>
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        className={classes.avatar}
                        alt={message.username}
                        title={message.username}
                        width="34"
                        height="34"
                      />
                      <div className={classes.timediv}>12:00AM</div>
                    </div>
                    <div className={classes.messageDiv}>
                      <div className={classes.messageText}>
                        {message.userId === props.crUser.userId
                          ? "You"
                          : message.username}
                      </div>
                      {message.message}
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollableFeed>
        </div>
        {props.children}
      </Box>
    </Box>
  );
};

export default ChatBody;
