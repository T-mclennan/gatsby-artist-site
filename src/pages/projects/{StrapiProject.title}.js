import React from 'react';
import Seo from "~components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
import PageWrapper from "~layout/PageWrapper";
import { graphql } from "gatsby";

const ProjectTemplate = ({pageContext: {title}, data}) => {

  const {images, content, date} = data.strapiProject;

  const projectImages = images[0].localFile.childImageSharp
  const coverImage = getImage(projectImages)

  return ( 

    <PageWrapper title={title}>
      <article style={{maxWidth: '60rem', padding: '1rem'}}>
        <GatsbyImage image={coverImage} alt={title}/>
        <div>
          <h4>{title}</h4>
          <div >
            <p>{date}</p>
          </div>
          <p>{content}</p>
        </div>
        <h4>{title}</h4>
      </article>
    </PageWrapper>
  )
}

export const query = graphql`
  query GetSingleProject($title: String) {
    strapiProject(title: {eq: $title}) {
      description
      images {
        localFile {
          publicURL
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              transformOptions: {cropFocus: CENTER}
            )
          }
        }
      }
      title
      content
      date
      slug
    }
  }
`

export default ProjectTemplate;
