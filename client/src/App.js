import React, { useState } from "react";
import styled from "styled-components";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Main from "./pages/Main";
import Navbar from "./components/Navbar";

import { lightTheme, darkTheme } from "./theme";
import EntryDetail from "./pages/EntryDetail";
import { AnimatePresence } from "framer-motion";
import Auth from "./pages/Auth";
import Books from "./pages/Books";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuthListener } from "./utils/hooks/useAuthStatus";

const AppWrapper = styled.main`
  display: flex;
  height: 100vh;
  /* min-width: 100%; */
  background-color: ${(props) => props.theme.colors.main.background};
  transition: background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  overflow: hidden;

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }
`;

const Content = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  /* min-width: 100%; */
  overflow-y: auto;
  overflow-x: hidden;
`;

function App() {
  const [isThemeLight, setisThemeLight] = useState(true);

  const { userId } = useAuthListener();

  const location = useLocation();
  console.log(userId);
  return (
    <ThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
      <AppWrapper>
        <Navbar themeState={isThemeLight} setState={setisThemeLight} />
        <Content>
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Auth userID={userId} />} />
              <Route path="/register" element={<Register userID={userId} />} />
              <Route
                path="/:userId/book"
                element={
                  <ProtectedRoute>
                    <Main />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/:userId/book/:id"
                element={
                  <ProtectedRoute>
                    <EntryDetail userID={userId} />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </AnimatePresence>
        </Content>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
