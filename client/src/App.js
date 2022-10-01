import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import Main from "./components/Main";
import Navbar from "./components/Navbar";

import { lightTheme, darkTheme } from "./theme";

const AppWrapper = styled.main`
  display: flex;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.main.background};
`;

function App() {
  const [isThemeLight, setisThemeLight] = useState(true);
  return (
    <ThemeProvider theme={isThemeLight ? lightTheme : darkTheme}>
      <AppWrapper>
        <Navbar />
        <Main />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
