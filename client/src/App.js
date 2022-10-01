import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import Main from "./pages/Main";
import Navbar from "./components/Navbar";

import { lightTheme, darkTheme } from "./theme";

const AppWrapper = styled.main`
  display: flex;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.main.background};
  transition: background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  overflow: hidden;
`;

function App() {
  const [isThemeLight, setisThemeLight] = useState(true);
  return (
    <ThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
      <AppWrapper>
        <Navbar themeState={isThemeLight} setState={setisThemeLight} />
        <Main />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
