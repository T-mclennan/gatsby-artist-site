import React from "react"
import { graphql } from "gatsby";
import Projects from "~projects";
import Seo from "~components/Seo";
import bg1 from '../assets/images/optimized/alp-ancel.webp';
import bg2 from '../assets/images/optimized/char-beck.webp';
import { 
  Hero, 
  Tagline, 
  Testimonial, 
  CallToAction, 
  Services, 
  FixedBackground, 
  Slider } from "~homepage";



const IndexPage = ({data}) => {

  const { 
    allStrapiProject: { nodes: projects},
  } = data;

  const imageGradient = 'linear-gradient(rgba(230, 100, 101, 0.4), rgba(145, 152, 229, 0.4))';
  
  return (
    <>
      <Seo title="Home"/>
      <main>
        <Hero />
        <CallToAction />
        <FixedBackground image={bg1} gradient={imageGradient} height='40vh'/>
        <Projects projects={projects} title="Latest Projects" showLink/>
        <Services />
        <Slider />
        <Tagline />
        <FixedBackground image={bg2} gradient={imageGradient} height='40vh'/>
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
  }
`

export default IndexPage
