import React from "react";
import { ThemeProvider } from "styled-components";
import { Box, Image } from "rebass";
import posed from "react-pose";

import "../style/reset.css";

import Logo from "./logo.svg";

const theme = {
  breakpoints: ["40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
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

const FadingHeader = posed.header({
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  entering: { opacity: 1 },
  entered: { opacity: 1 }
});

const Layout = ({ children, transitionStatus }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <FadingHeader pose={transitionStatus}>
        <Box px={[3, 5]} py={4}>
          <Image src={Logo} alt="Gatsbygram Logo" height={32} />
        </Box>
      </FadingHeader>
      <Box as="main" px={[3, 5]}>
        {children}
      </Box>
    </React.Fragment>
  </ThemeProvider>
);

export default Layout;
