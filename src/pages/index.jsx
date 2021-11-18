import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/homepage/Hero"
import CarouselSection from "../components/homepage/CarouselSection"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"

const IndexPage = () => {
  return (
    <>
      <main>
        <Hero />
        <div style={{height: '150vh', width: '100%', backgroundColor: 'gray'}}></div>
        <CarouselSection />
        <Jobs />
      </main>
    </>
  )
}

export default IndexPage
