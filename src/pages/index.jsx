import React from "react"
import { graphql } from "gatsby";
import Hero from "../components/homepage/Hero";
import CarouselSection from "../components/homepage/CarouselSection";
import Tagline from "../components/homepage/Tagline";
import Testimonial from "../components/homepage/Testimonial";
import CallToAction from "../components/homepage/CallToAction";
import Video from "../components/homepage/Video";
import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <>
      <main>
        <Hero />
        <div style={{background: "white", zIndex: 1}} >
          <Tagline />
          <CarouselSection />
          <CallToAction />
          <Video />
          <Testimonial />
        </div>
      </main>
    </>
  )
}

export default IndexPage
