import React, { useState } from "react";
import Background from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Trade from "./components/Trade/Trade";
import Events from "./components/Events/Events";
import Community from "./components/Community/Community";
import LostFound from "./components/LostFound/LostFound";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";

const App = () => {
  const [theme, colorMode] = useMode();
  const [isAuthPage, setIsAuthPage] = useState(false);

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

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar isAuthPage={isAuthPage} />
        <Routes>
          <Route path="/" exact element={<Background1 />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/lost" element={<LostFound />} />
          <Route path="/auth" element={<Auth1 />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
