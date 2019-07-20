import React from "react";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";
import posed from "react-pose";

import Layout from "../components/layout";
import ProjectHeader from "../components/project-header";
import ProjectContent from "../components/project-content";

const TRANSITION_LENGTH = 1.5;

const FadingContent = posed.div({
  exiting: { opacity: 0 }
});

const ProjectInner = ({ transitionStatus, project }) => {
  const nextProjectUrl = `/projects/${project.next.slug}`;

  const exitTransition = {
    length: TRANSITION_LENGTH,
    trigger: () => console.log("We are exiting")
  };

  const entryTransition = {
    delay: TRANSITION_LENGTH,
    trigger: () => console.log("We are entering")
  };

  return (
    <Layout>
      <FadingContent pose={transitionStatus}>
        <ProjectHeader project={project} />
        <ProjectContent />
      </FadingContent>
      <TransitionLink
        to={nextProjectUrl}
        exit={exitTransition}
        entry={entryTransition}
      >
        <ProjectHeader project={project.next} truncated />
      </TransitionLink>
    </Layout>
  );
};

const Project = ({ pageContext: project }) => {
  return (
    <TransitionState>
      {({ transitionStatus }) => (
        <ProjectInner transitionStatus={transitionStatus} project={project} />
      )}
    </TransitionState>
  );
};

export default Project;
