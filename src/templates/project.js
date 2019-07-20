import React from "react";
import TransitionLink, { TransitionState } from "gatsby-plugin-transition-link";

import Layout from "../components/layout";
import ProjectHeader from "../components/project-header";
import ProjectContent from "../components/project-content";

const ProjectInner = ({ transitionStatus, project }) => {
  const nextProjectUrl = `/projects/${project.next.slug}`;
  return (
    <Layout>
      <ProjectHeader project={project} />
      <ProjectContent />
      <TransitionLink to={nextProjectUrl}>
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
