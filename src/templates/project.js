import React from "react";

import Layout from "../components/layout";
import ProjectHeader from "../components/project-header";
import ProjectContent from "../components/project-content";

const Project = ({ pageContext: project }) => (
  <Layout>
    <ProjectHeader project={project} />
    <ProjectContent />
    <ProjectHeader project={project.next} truncated />
  </Layout>
);

export default Project;
