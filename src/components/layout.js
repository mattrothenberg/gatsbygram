import React from "react";
import { ThemeProvider } from "styled-components";
import { Box } from "rebass";

import "../style/reset.css";

const theme = {
  breakpoints: ["40em", "52em", "64em"],
  fonts: {
    sans: "system-ui, sans-serif"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 46],
  colors: {
    grey: "#999",
    black: "#1a1a1a",
    red: "#e61428"
  }
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Box as="header" px={[3, 5]}>
        silly header
      </Box>
      <Box as="main" px={[3, 5]}>
        {children}
      </Box>
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;
