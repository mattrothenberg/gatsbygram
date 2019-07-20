const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`./src/templates/project.js`);

  const projects = [
    {
      title: "Project #1",
      slug: "project-1"
    },
    {
      title: "Project #2",
      slug: "project-2"
    },
    {
      title: "Project #3",
      slug: "project-3"
    },
    {
      title: "Project #4",
      slug: "project-4"
    }
  ];

  const createProjectPage = (project, index) => {
    const next = projects[index === projects.length - 1 ? 0 : index + 1];
    createPage({
      path: `/projects/${project.slug}`,
      component: projectTemplate,
      context: {
        ...project,
        next
      }
    });
  };

  projects.forEach(createProjectPage);
};
