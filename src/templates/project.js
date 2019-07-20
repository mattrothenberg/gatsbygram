import React from "react";

import Layout from "../components/layout";

const Project = ({ pageContext: project }) => <Layout>{project.title}</Layout>;

export default Project;
