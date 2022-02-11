import React from "react"
import { graphql } from "gatsby"
import Title from "~components/Title"
import Seo from "~components/Seo"
import PageWrapper from "~layout/PageWrapper"

const About = () => {
  return (
    <PageWrapper>
      {/* <h2 style={{fontFamily: 'var(--ff-marker)'}}>About page</h2> */}
      <Title title="About Graff and Stuff"/>
      
    </PageWrapper>
  )
}

export default About;
