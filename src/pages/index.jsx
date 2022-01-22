import React from "react"
import { graphql } from "gatsby";
import Hero from "../components/homepage/Hero";
import CarouselSection from "../components/homepage/CarouselSection";
import Seo from "../components/Seo";
import Tagline from "../components/homepage/Tagline";
import Testimonial from "../components/homepage/Testimonial";
import CallToAction from "../components/homepage/CallToAction";
import FixedBackground from '../components/homepage/FixedBackground';
import bg1 from '../assets/images/optimized/alp-ancel.webp';
import bg2 from '../assets/images/optimized/char-beck.webp';



const IndexPage = () => {

  const imageGradient = 'linear-gradient(rgba(230, 100, 101, 0.4), rgba(145, 152, 229, 0.4))';
  return (
    <main>
      <Hero />
      <Tagline />
      {/* <CarouselSection /> */}
      <FixedBackground image={bg1} gradient={imageGradient}/>
      <CallToAction />
      <FixedBackground image={bg2} gradient={imageGradient}/>
      <Testimonial />
    </main>
  )
}

export default IndexPage
