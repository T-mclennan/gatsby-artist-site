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
      featured
      title
      image {
        localFile {
          url
        }
      }
    }
    }
  }
`


const Slider = () => {

  const data = useStaticQuery(query)
  const {allStrapiGallery:{nodes: pictures}} = data;
  // const {position, company, date, desc} = jobs[0];

  return (
    <section className="slideshow-section">
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
            const back = image.localFile.url;

            const backgroundStyle = {backgroundImage: `url(${back})`}
            return (
              <SwiperSlide key={id}>
                <article style={backgroundStyle} className="image-slide">
                  <Link to="/gallery" className="btn center-btn">
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