import React from "react"
import { graphql } from "gatsby";
import Projects from "~projects";
import Seo from "~components/Seo";
import Hero from "~homepage/Hero";
import Tagline from "~homepage/Tagline";
import Testimonial from "~homepage/Testimonial";
import CallToAction from "~homepage/CallToAction";
import FixedBackground from '~homepage/FixedBackground';
import bg1 from '../assets/images/optimized/alp-ancel.webp';
import bg2 from '../assets/images/optimized/char-beck.webp';



const IndexPage = ({data}) => {

  const { 
    allStrapiProject: { nodes: projects},
  } = data;

  const imageGradient = 'linear-gradient(rgba(230, 100, 101, 0.4), rgba(145, 152, 229, 0.4))';
  
  return (
    <main>
      <Hero />
      <Tagline />
      <Projects projects={projects} title="Latest Projects" showLink/>
      <FixedBackground image={bg1} gradient={imageGradient} height={60}/>
      <CallToAction />
      <FixedBackground image={bg2} gradient={imageGradient} height={60}/>
      <Testimonial />
    </main>
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
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`

export default IndexPage
