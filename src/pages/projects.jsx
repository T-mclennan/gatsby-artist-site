import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/projects"
import Seo from "../components/Seo"
import PageWrapper from "../components/layout/PageWrapper"

const ProjectsPage = () => {
  return (
    <PageWrapper>
      <h2 style={{fontFamily: 'var(--ff-marker)'}}>Projects Page</h2>
    </PageWrapper>
  )
}





export const query = graphql`
  {
    allStrapiProject(sort: {fields: date, order: DESC}, limit: 3) {
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