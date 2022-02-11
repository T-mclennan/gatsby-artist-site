import React from "react"
import { graphql } from "gatsby"
import Projects from "~projects"
import Seo from "~components/Seo"
import PageWrapper from "~layout/PageWrapper"

const GalleryPage = ({data}) => {

  const { 
    allStrapiGallery: { nodes: galleryData},
  } = data;

  console.log(galleryData)
  return (
    <PageWrapper>
      <h2 style={{fontFamily: 'var(--ff-marker)'}}>Gallery page</h2>
    </PageWrapper>
  )
}

export const query = graphql`
  {
    allStrapiGallery {
      nodes {
        Image {
          IsFeatured
          Title
          id
          Image {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
      totalCount
    }
  }
`


export default GalleryPage
