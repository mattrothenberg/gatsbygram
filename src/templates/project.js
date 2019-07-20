import React from "react";

import Layout from "../components/layout";
import ProjectHeader from "../components/project-header";

const Project = ({ pageContext: project }) => (
  <Layout>
    <ProjectHeader project={project} />
    <ProjectHeader project={project.next} truncated />
  </Layout>
);

export default Project;
