import React, { useState } from "react";
import styled from "styled-components";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Main from "./pages/Main";
import Navbar from "./components/Navbar";

import { lightTheme, darkTheme } from "./theme";
import EntryDetail from "./pages/EntryDetail";
import { AnimatePresence } from "framer-motion";

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

  const location = useLocation();
  return (
    <ThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
      <AppWrapper>
        <Navbar themeState={isThemeLight} setState={setisThemeLight} />
        <Content>
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Main />} />
              <Route path="/:id" element={<EntryDetail />} />
            </Routes>
          </AnimatePresence>
        </Content>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
