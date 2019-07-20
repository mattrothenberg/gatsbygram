import React from "react";
import { Box } from "rebass";
import styled from "styled-components";
import Img from "gatsby-image";

import AspectRatioBox from "./aspect-ratio-box";

const Grid = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${props => props.theme.space[4]}px;
`;

const ProjectContent = ({ photos }) => {
  return (
    <Box my={4}>
      <Grid>
        {photos.length ? (
          photos.map((photo, index) => {
            const withFixedAspectRatio = {
              ...photo.fluid,
              aspectRatio: 8 / 5
            };
            return (
              <AspectRatioBox key={index} ratio={8 / 5}>
                <Img fadeIn={false} fluid={withFixedAspectRatio} />
              </AspectRatioBox>
            );
          })
        ) : (
          <>
            <AspectRatioBox ratio={8 / 5} />
            <AspectRatioBox ratio={8 / 5} />
            <AspectRatioBox ratio={8 / 5} />
            <AspectRatioBox ratio={8 / 5} />
          </>
        )}
      </Grid>
    </Box>
  );
};

export default ProjectContent;
