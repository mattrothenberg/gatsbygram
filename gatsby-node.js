const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`./src/templates/project.js`);

  const query = `{
    projects:allDatoCmsProject {
      edges {
        node {
          title
          slug
          description
          category {
            title
          }
          featuredPhoto {
            ...on DatoCmsAsset {
              fluid {
                aspectRatio
                width
                height
                src
                srcSet
                sizes
              }
            }
          }
          photos {
            ...on DatoCmsAsset{
              fluid {
                aspectRatio
                width
                height
                src
                srcSet
                sizes
              }
            }
          }
        }
        next {
          title
          slug
          description
          category {
            title
          }
          featuredPhoto {
            ...on DatoCmsAsset {
              fluid {
                aspectRatio
                width
                height
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  }`;

  const result = await graphql(query);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const projects = result.data.projects.edges;

  const createProjectPage = project => {
    const next = project.next || projects[0].node;
    createPage({
      path: `/projects/${project.node.slug}`,
      component: projectTemplate,
      context: {
        ...project.node,
        next
      }
    });
  };

  projects.forEach(createProjectPage);
};
