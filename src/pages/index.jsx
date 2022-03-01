import React from "react"
import { graphql } from "gatsby";
import Projects from "~projects";
import Seo from "~components/Seo";
import bg1 from '../assets/images/optimized/alp-ancel.webp';

import { 
  Hero, 
  Testimonial, 
  CallToAction, 
  Services, 
  FixedBackground, 
  Slider } from "~homepage";



const IndexPage = ({data}) => {

  const { 
    allStrapiProject: { nodes: projects},
    allStrapiHomepage: { nodes: homePageData}
  } = data;

  const {bgImage1, bgImage2, headerImage} = homePageData[0];

  // console.log(bgImage1);
  // const bg1 = bgImage1.localFile.childImageSharp.original;
  // console.log(bg1)

  const imageGradient = 'linear-gradient(rgba(230, 100, 101, 0.4), rgba(145, 152, 229, 0.4))';
  
  return (
    <>
      <Seo title="Home"/>
      <main>
        <Hero />
        <CallToAction />
        <Slider />
        <Projects projects={projects} title="Latest Projects" showLink/>
        <Testimonial />
        <Services />
        <FixedBackground image={bg1} gradient={imageGradient} height='40vh'/>
      </main>
    </>
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
              gatsbyImageData(
                placeholder: BLURRED, layout: CONSTRAINED
                transformOptions: {cropFocus: CENTER}
              )
            }
          }
        }
      }
    }
    allStrapiHomepage {
      nodes {
        bgImage1 {
          localFile {
            childImageSharp {
              original {
                src
              }
            }
          }
        }
        bgImage2 {
          url
        }
        headerImage {
          url
        }
      }
    }
  }
`

export default IndexPage
