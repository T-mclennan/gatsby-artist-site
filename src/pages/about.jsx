import React from "react"
import { graphql } from "gatsby"
import Title from "~components/Title"
import PageWrapper from "~layout/PageWrapper"

const About = ({data}) => {

  const { 
    allStrapiAbout: { nodes: aboutData},
  } = data;

  console.log('About Data')
  console.log(aboutData)
  return (
    <PageWrapper pageName="About">
      <Title title="About Graff and Stuff"/>
    </PageWrapper>
  )
}

export const query = graphql`
  {
    allStrapiAbout {
      nodes {
        Artist {
          Picture {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          Description
          Email
          Facebook
          Instagram
          Location
          Name
          id
          Twitter
        }
        Description
        Title
        id
      }
    }
  }
`

export default About;
