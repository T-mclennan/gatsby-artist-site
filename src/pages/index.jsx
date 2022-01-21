import React from "react"
import { graphql } from "gatsby";
import Hero from "../components/homepage/Hero";
import CarouselSection from "../components/homepage/CarouselSection";
import Tagline from "../components/homepage/Tagline";
import Testimonial from "../components/homepage/Testimonial";
import CallToAction from "../components/homepage/CallToAction";
import Video from "../components/homepage/Video";
import PageWrapper from "../components/PageWrapper"
import FixedBackground from '../components/homepage/FixedBackground';
import bg1 from '../assets/images/alp-ancel.jpg'
import bg2 from '../assets/images/char-beck.jpg'


import Seo from "../components/Seo";

const IndexPage = () => {
  return (
    <main>
      <Hero />
      {/* <div style={{background: "white", zIndex: 1}} > */}
      <Tagline />
      {/* <CarouselSection /> */}
      <FixedBackground image={bg1} gradient='linear-gradient(rgba(230, 100, 101, 0.4), rgba(145, 152, 229, 0.4))'/>
      <CallToAction />
      <Video />
      <FixedBackground image={bg2} gradient='linear-gradient(rgba(230, 100, 101, 0.4), rgba(145, 152, 229, 0.4))'/>
      <Testimonial />
      {/* </div> */}
    </main>
  )
}

export default IndexPage
