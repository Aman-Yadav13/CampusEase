import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";
import useStyles from "./styles";

const Main = ({ socket }) => {
  const classes = useStyles();
  const location = useLocation();
  const [loggedInAs, setLoggedInAs] = useState("");
  const [messages, setMessages] = useState([]);
  const [isInChatRoom, setIsInChatRoom] = useState(false);
  const [isCustomNameLogin, setIsCustomNameLogin] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const [crUser, setCrUser] = useState({});
  const [users, setUsers] = useState([]);
  const sessionExists = localStorage.getItem("sessionId");

  const checkIfUserExists = useCallback(() => {
    const sessionId = localStorage.getItem("sessionId");
    if (sessionId) {
      socket.auth = { sessionId: sessionId };
      socket.connect();
    }
  }, [socket]);

  // useEffect(() => {
  //   if (crUser.username && crUser.userId) {
  //     localStorage.setItem("crUserUsername", crUser.username);
  //     localStorage.setItem("crUserUserId", crUser.userId);
  //   }
  // }, [crUser]);

  // useEffect(() => {
  //   const username = localStorage.getItem("crUserUsername");
  //   const userId = localStorage.getItem("crUserUserId");
  //   if (username && userId) {
  //     setCrUser({ username, userId });
  //   }
  // }, []);

  const handlePageReload = (e) => {
    window.alert("Page is reloading");
  };

  useEffect(() => {
    checkIfUserExists();
    socket.on("session", ({ sessionId, userId, username }) => {
      socket.auth = { sessionId: sessionId };
      localStorage.setItem("sessionId", sessionId);
      setCrUser({ userId, username });
    });

    socket.on("users", (users) => {
      // const messagesArr = [];
      // for (const { userId, username } of users) {
      //   const newMessage = { type: "UserStatus", userId, username };
      //   messagesArr.push(newMessage);
      // }
      // setMessages([...messages, ...messagesArr]);
      console.log(users);
      setUsers(users);
    });
  }, [socket, messages, checkIfUserExists, setUsers]);

  const onCustomBtnClick = () => {
    if (loggedInAs.length === 0) {
      window.alert("Enter a custom username!");
      return;
    }
    setCrUser({ ...crUser, username: loggedInAs });
    setIsCustomNameLogin(true);
    const sessionId = localStorage.getItem("sessionId");
    if (sessionId) {
      socket.auth = { username: loggedInAs, sessionId: sessionId };
      socket.connect();
    } else {
      socket.auth = { username: loggedInAs };
      socket.connect();
    }

    setIsInChatRoom(true);
  };

  const onLoggedInBtnClick = () => {
    if (!user) {
      window.alert("Log in to get access to chatrooms!");
      return;
    }
    setCrUser(user?.result?.name);
    const sessionId = localStorage.getItem("sessionId");
    //

    socket.auth = { username: user?.result?.name };
    socket.connect();

    setIsInChatRoom(true);
  };

  const deleteSession = () => {
    const sessionId = localStorage.getItem("sessionId");
    if (!sessionId) {
      window.alert("There are no active sessions!");
    } else {
      localStorage.removeItem("sessionId");
    }
  };

  return (
    <>
      {crUser.userId && (
        <Chat
          setMessages={setMessages}
          messages={messages}
          user={user}
          crUser={crUser}
          socket={socket}
          users={users}
          handlePageReload={handlePageReload}
          setUsers={setUsers}
          loggedInAs={isCustomNameLogin ? loggedInAs : ""}
        />
      )}
      {!localStorage.getItem("crUserUsername") && (
        <Login
          onLoggedInBtnClick={onLoggedInBtnClick}
          onCustomBtnClick={onCustomBtnClick}
          loggedInAs={loggedInAs}
          setLoggedInAs={setLoggedInAs}
          deleteSession={deleteSession}
        />
      )}
    </>
  );
};

export default Main;
