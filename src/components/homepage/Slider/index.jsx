import React, { useRef, useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from "swiper/react";
import { graphql, useStaticQuery, Link } from "gatsby"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";


export const query = graphql`
  query MyQuery {
    allStrapiGallery(filter: {featured: {eq: true}}) {
      nodes {
        id
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        featured
        title
      }
    }
  }
`


const Slider = () => {

  const data = useStaticQuery(query)
  const {allStrapiGallery:{nodes: pictures}} = data;
  return (
    <section className="slider-section">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {
          pictures.map((data, i) => {
            const {image, title, id} = data;
            const coverImage = getImage(image.localFile)
            return (
              <SwiperSlide key={id}>
                <article className="swipe-container">
                  <GatsbyImage image={coverImage} alt={`picture-${i}`}/>
                  <Link to="/gallery" className="btn center-btn gallery-btn">
                  See Gallery
                </Link>
                </article>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  );
}

export default Slider;