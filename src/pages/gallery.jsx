import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PageWrapper from "~layout/PageWrapper";
import Title from "~components/Title";
import Gallery from '@browniebroke/gatsby-image-gallery';
import * as styles from './gallery.module.css';

const GalleryPage = ({data}) => {

  const images = data.allStrapiGallery.edges.map(({ node }) => {
    return node.image.localFile.childImageSharp;
  })

  const CustomWrapper = ({ children, onClick }) => (
    <div className={styles.imageWrapper} onClick={onClick}>
      {children}
    </div>
  )

  return (
    <PageWrapper pageName="Gallery">
      <section className={styles.gallery}>
        <Title title="Gallery"/>
        <Gallery 
          images={images}
          // customWrapper={CustomWrapper}
        />
      </section>
    </PageWrapper>
  )
}

export const query = graphql`
  {
    allStrapiGallery {
      edges {
        node {
          image {
            localFile {
              childImageSharp {
                thumb: gatsbyImageData(width: 270, height: 270, placeholder: BLURRED)
                full: gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`


export default GalleryPage
