import React from "react"
import { graphql } from "gatsby"
import PageWrapper from "~layout/PageWrapper"

const GalleryPage = ({data}) => {

  const { 
    allStrapiGallery: { nodes: galleryData},
  } = data;

  console.log(galleryData)
  return (
    <PageWrapper pageName="Gallery">
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
