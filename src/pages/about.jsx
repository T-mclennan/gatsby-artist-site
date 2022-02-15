import React from "react";
import { graphql } from "gatsby";
import Title from "~components/Title";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PageWrapper from "~layout/PageWrapper";
import * as styles from './about.module.css';

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa"
import {MdEmail} from "react-icons/md"
import {  AiFillInstagram,} from "react-icons/ai"



const About = ({data}) => {

  const { 
    allStrapiArtist: { nodes: artistData},
  } = data;

  return (
    <PageWrapper pageName="About" className={styles.about}>
      <header className={styles.aboutHeader}>
        <Title title={'About Us'}/>
      </header>
      {artistData.map((artist, i) => {
        const {id, description, name, email, facebook, twitter, instagram, youtube, location, picture} = artist;
        const image = getImage(picture.localFile)
        const delay = 100 + (i)*200;
        return (
          <article className={styles.artistContent} key={id}>
            <header className={styles.contentBox}>
              <div className={styles.titleBox}>
                <div>
                  <h2>{name}</h2>
                  <h5>{location}</h5>
                </div>
                <div className={styles.iconBox}
                  data-sal="zoom-in"
                  data-sal-duration="700" 
                  data-sal-delay={delay} 
                  data-sal-easing="ease" 
                >
                    {email    && <MdEmail className={styles.socialIcon}></MdEmail>}
                    {facebook && <FaFacebookSquare className={styles.socialIcon}></FaFacebookSquare>}
                    {twitter  && <FaTwitterSquare className={styles.socialIcon}></FaTwitterSquare>}
                    {youtube  && <FaYoutube className={styles.socialIcon}></FaYoutube>}
                    {instagram && <AiFillInstagram className={styles.socialIcon}></AiFillInstagram>}
                </div>
              </div>
              <p>{description}</p>
            </header>
            <GatsbyImage image={image} alt={name}/>
          </article>
        )
      })
    }

    </PageWrapper>
  )
}

export const query = graphql`
  {
    allStrapiArtist {
      nodes {
        description
        email
        facebook
        id
        instagram
        youtube
        twitter
        name
        location
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(
                transformOptions: {cropFocus: NORTH, fit: CONTAIN}
                placeholder: TRACED_SVG
                tracedSVGOptions: {color: "#871400", threshold: 45}
                layout: CONSTRAINED
                height: 400
                width: 400
              )
            }
          }
        }
      }
    }
  }
`

export default About;
