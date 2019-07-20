import React from "react";
import { ThemeProvider } from "styled-components";
import { Box } from "rebass";

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
    <React.Fragment>
      <Box as="header">silly header</Box>
      <Box as="main">{children}</Box>
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;
