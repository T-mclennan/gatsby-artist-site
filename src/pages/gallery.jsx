import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PageWrapper from "~layout/PageWrapper"
import Title from "~components/Title";
import * as styles from './gallery.module.css';

const GalleryPage = ({data}) => {

  
  const { 
    allStrapiGallery: { nodes: galleryData},
  } = data;

  return (
    <PageWrapper pageName="Gallery">
      <Title title="Gallery"/>
      <section className={styles.gallery}>
        {galleryData.map(({id, image, title}) => {
           const img = getImage(image.localFile);
           return  (
              <div key={id} >
                <GatsbyImage image={img} alt={title} objectFit="cover" trim={100}/>
              </div>
             )
        })}
      </section>

    </PageWrapper>
  )
}

export const query = graphql`
  {
    allStrapiGallery {
      nodes {
        id
        featured
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`


export default GalleryPage
