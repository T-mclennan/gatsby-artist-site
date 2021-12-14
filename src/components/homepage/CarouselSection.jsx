import React from 'react';
import { Link } from "gatsby";
import { Carousel } from 'antd';
import TweenOne from 'rc-tween-one';
import { StaticImage } from "gatsby-plugin-image";
import 'antd/dist/antd.css';
import * as styles from './CarouselSection.module.css';


function CarouselSection() {

  return (
    <section id="carousel-content" style={{backgroundColor: 'white'}}>
      <Carousel arrows autoplay effect="fade">
        <>
          <div className={styles.contentStyle}>
            <header className={styles.muralHeader}>
              <TweenOne className={styles.headerText} animation={{ y: 30, opacity: 0, type: 'from' }}>
                <h1 className={styles.headerText}>
                  <span style={{padding: '0.25rem', backgroundColor: 'rgba(0, 0, 0, 0.)'}}>
                    This is a Mural 1
                  </span>
                </h1>
              </TweenOne>
              <TweenOne className="banner-user-text" 
                animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
              >
                <Link to="/about" className="btn">
                  See It Now!
                </Link>
              </TweenOne>
            </header>
            <StaticImage 
              // height={800}
              src="../../assets/images/graff1.jpg"
              alt="header image"
              className="hero-img"
              placeholder="blurred"
            />
          </div>
        </>
        <>
          <div className={styles.contentStyle}>
            <header className={styles.muralHeader}>
              <TweenOne className={styles.headerText} animation={{ y: 30, opacity: 0, type: 'from' }}>
                <h1 className={styles.headerText}>
                  <span style={{padding: '0.25rem', backgroundColor: 'rgba(0, 0, 0, 0.)'}}>
                    This is a Mural 2
                  </span>
                </h1>
              </TweenOne>
              <TweenOne animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}>
                <Link to="/about" className="btn">
                  See It Now!
                </Link>
              </TweenOne>
            </header>
            <StaticImage 
              // height={800}
              src="../../assets/images/graff2.jpg"
              alt="header image"
              className="hero-img"
              placeholder="blurred"
            />
          </div>
        </>
        {/* <>
        <div className={styles.contentStyle}>
            <header className={styles.muralHeader}>
              <h2 style={{color: 'white', backgroundColor: 'rgba(0, 0, 0, 1,)'}}>This is a Mural 3</h2>
              <Button>See it Now!</Button>
            </header>
            <StaticImage 
              // height={800}
              src="../../assets/images/graff3.jpg"
              alt="header image"
              className="heroImg"
              placeholder="blurred"
            />
          </div>
        </>
        <>
        <div className={styles.contentStyle}>
            <header className={styles.muralHeader}>
              <h2 style={{color: 'white', backgroundColor: 'rgba(0, 0, 0, 1,)'}}>This is a Mural 4</h2>
              <Button>See it Now!</Button>
            </header>
            <StaticImage 
              // height={800}
              src="../../assets/images/guy-spray.jpg"
              alt="header image"
              className="heroImg"
              placeholder="blurred"
            />
          </div>
        </> */}
      </Carousel>
    </section>
  )
}

export default CarouselSection
