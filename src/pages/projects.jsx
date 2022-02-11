import React from "react";
import { graphql } from "gatsby";
import Projects from "~projects";
import Seo from "../components/Seo";
import PageWrapper from "~layout/PageWrapper";

const ProjectsPage = ({data}) => {

  const { 
    allStrapiProject: { nodes: projects},
    // allStrapiArtist: { nodes: artists}
  } = data;

  return (
    <PageWrapper>
      <Projects projects={projects} title="All Projects"/>
    </PageWrapper>
  )
}





export const query = graphql`
  {
    allStrapiProject(sort: {fields: date, order: DESC}) {
      nodes {
        slug
        content
        date(formatString: "MMM Do, YYYY")
        description
        title
        updated_at
        id
        category
        images {
          localFile {
            childrenImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`
export default ProjectsPage