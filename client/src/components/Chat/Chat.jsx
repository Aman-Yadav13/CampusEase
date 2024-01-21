import React, { useEffect, useState } from "react";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatContainer from "./ChatContainer";

const user = JSON.parse(localStorage.getItem("profile"));

const Chat = ({
  socket,
  messages,
  setMessages,
  user,
  crUser,
  loggedInAs,
  users,
  setUsers,
  handlePageReload,
}) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleUserConnected = ({ username, userId }) => {
      const newMessage = { type: "UserStatus", userId, username };
      setUsers([...users, newMessage]);
    };

    const handleNewMessage = ({ userId, username, message }) => {
      const newMessage = {
        type: "message",
        userId: userId,
        username: username,
        message,
      };
      console.log("HandleNewMessage function is called!");
      setMessages([...messages, newMessage]);
    };
    socket.on("user connected", handleUserConnected);
    socket.on("new message", handleNewMessage);
    // return () => {
    //   // Clean up event listeners when the component unmounts
    //   socket.off("user connected", handleUserConnected);
    //   socket.off("new message", handleNewMessage);
    // };
  }, [socket, messages, setMessages, users, setUsers]);

  const sendMessage = () => {
    socket.emit("new message", message);

    const newMessage = {
      type: "message",
      userId: crUser.userId,
      username: crUser.username,
      message,
    };
    setMessages([...messages, newMessage]);
    setMessage("");
  };

  return (
    <ChatContainer>
      <ChatHeader />
      <ChatBody
        crUser={crUser}
        message={message}
        messages={messages}
        setMessage={setMessage}
      >
        <ChatInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </ChatBody>
    </ChatContainer>
  );
};

export default Chat;
