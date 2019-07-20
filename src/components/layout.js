import React from "react";
import { ThemeProvider } from "styled-components";

import "../style/reset.css";

const theme = {
  fonts: {
    sans: "system-ui, sans-serif"
  },
  colors: {
    grey: "#999",
    black: "#1a1a1a",
    red: "#e61428"
  }
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>{children}</React.Fragment>
  </ThemeProvider>
);

export default Layout;
