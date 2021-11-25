import React from 'react'
import { Carousel, Button } from 'antd';
import { StaticImage } from "gatsby-plugin-image";
import 'antd/dist/antd.css';


function CarouselSection() {

  const contentStyle = {
    height: '75vh',
    color: '#364d79',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  };

  // const container ={
  //   height: '80vh',
  //   width: '100%',
  //   backgroundColor: 'pink',
  //   color: 'whitesmoke',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'relative',
  // }

  const muralHeader = {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'transparent',
  }

  return (


    <section id="carousel-content" style={{backgroundColor: 'white'}}>
      <Carousel arrows autoplay effect="fade">
        <>
          <div style={contentStyle}>
            <header style={muralHeader}>
              <h2 style={{color: 'white', backgroundColor: 'rgba(0, 0, 0, 1,)'}}>This is a Mural Title</h2>
              <Button>See it Now!</Button>
            </header>
            <StaticImage 
              height={800}
              src="../../assets/images/graff1.jpg"
              alt="header image"
              className="hero-img"
              placeholder="blurred"
            />
          </div>
        </>
        <>
          <div style={contentStyle}>
          <header style={muralHeader}>
              <h2 style={{color: 'white', backgroundColor: 'rgba(0, 0, 0, 1,)'}}>This is a Mural Title</h2>
              <Button>See it Now!</Button>
            </header>
            <StaticImage 
              // height={1000}
              height={800}
              src="../../assets/images/graff2.jpg"
              alt="header image"
              className="hero-img"
              placeholder="blurred"
            />
          </div>
        </>
        <>
        <div style={contentStyle}>
        <header style={muralHeader}>
              <h2 style={{color: 'white', backgroundColor: 'rgba(0, 0, 0, 1,)'}}>This is a Mural Title</h2>
              <Button>See it Now!</Button>
            </header>
            <StaticImage 
              height={800}
              src="../../assets/images/graff3.jpg"
              alt="header image"
              className="hero-img"
              placeholder="blurred"
            />
          </div>
        </>
        <>
        <div style={contentStyle}>
        <header style={muralHeader}>
              <h2 style={{color: 'white', backgroundColor: 'rgba(0, 0, 0, 1,)'}}>This is a Mural Title</h2>
              <Button>See it Now!</Button>
            </header>
            <StaticImage 
              height={800}
              src="../../assets/images/guy-spray.jpg"
              alt="header image"
              className="hero-img"
              placeholder="blurred"
            />
          </div>
        </>
      </Carousel>
    </section>
  )
}

export default CarouselSection
