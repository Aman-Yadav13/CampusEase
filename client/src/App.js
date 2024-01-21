import React, { useState, useEffect } from "react";
import Background from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Trade from "./components/Trade/Trade";
import CardDetails from "./components/Trade/CardDetails/CardDetails";
import Events from "./components/Events/Events";
import Community from "./components/Community/Community";
import LostFound from "./components/LostFound/LostFound";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
import About from "./components/About/About";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "./actions/items";
import { getTradeItems } from "./actions/tradeItems";
import { getQuestions } from "./actions/questions";
import CheckoutSuccess from "./Pages/CheckoutSuccess";
import CheckoutCancel from "./Pages/CheckoutCancel";
import Main from "./components/Chat/Main";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");
const user = JSON.parse(localStorage.getItem("profile"));

const App = () => {
  const [theme, colorMode] = useMode();

  const [isAuthPage, setIsAuthPage] = useState(false);
  const [isCheckoutSuccessPage, setIsCheckoutSuccessPage] = useState(false);
  const dispatch = useDispatch();
  const Auth1 = (props) => {
    return (
      <Auth isAuthPage={isAuthPage} setIsAuthPage={setIsAuthPage} {...props} />
    );
  };
  const Background1 = (props) => {
    return (
      <Background
        isAuthPage={isAuthPage}
        setIsAuthPage={setIsAuthPage}
        {...props}
      />
    );
  };

  const Main1 = (props) => {
    return <Main socket={socket} {...props} />;
  };
  const LostFound1 = (props) => {
    return <LostFound socket={socket} {...props} />;
  };

  useEffect(() => {
    dispatch(getItems());
    dispatch(getTradeItems());
    dispatch(getQuestions());
  }, [dispatch]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar isAuthPage={isAuthPage} />
        <Routes>
          <Route path="/" exact element={<Background1 />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/trade/:id" element={<CardDetails />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/lost" element={<LostFound1 />} />
          <Route path="/auth" element={<Auth1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/checkout-cancel" element={<CheckoutCancel />} />
          <Route path="/chat" element={<Main1 />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
