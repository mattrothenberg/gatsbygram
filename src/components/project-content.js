import React from "react";
import { Box } from "rebass";
import styled from "styled-components";

import AspectRatioBox from "./aspect-ratio-box";

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${props => props.theme.space[4]}px;
`;

const ProjectContent = () => (
  <Box my={4}>
    <Grid>
      <AspectRatioBox ratio={8 / 5} />
      <AspectRatioBox ratio={8 / 5} />
      <AspectRatioBox ratio={8 / 5} />
      <AspectRatioBox ratio={8 / 5} />
    </Grid>
  </Box>
);

export default ProjectContent;
