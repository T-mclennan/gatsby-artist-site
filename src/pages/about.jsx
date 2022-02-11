import React from "react"
import { graphql } from "gatsby"
import Title from "~components/Title"
import Seo from "~components/Seo"
import PageWrapper from "~layout/PageWrapper"

const About = ({data}) => {

  const { 
    allStrapiAbout: { nodes: aboutData},
  } = data;

  console.log('About Data')
  console.log(aboutData)
  return (
    <PageWrapper>
      {/* <h2 style={{fontFamily: 'var(--ff-marker)'}}>About page</h2> */}
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
