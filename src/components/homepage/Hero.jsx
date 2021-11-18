import React from "react"
import { Link } from "gatsby";
import socialLinks from "../../constants/social_links";
import { Parallax } from 'react-scroll-parallax';
import { StaticImage } from "gatsby-plugin-image";
import HeroNav from './HeroNav';
import * as styles from './Hero.module.css';

const Hero = () => {
  return (
    <header className={styles.hero}>
        {/* <HeroNav />
        <div className={styles.heroDetails}>
          <div className={styles.heroText}>
            <h1>Santa Cruz Street Art</h1>
            <button>Learn More</button>
          </div>
        </div> */}
          {/* <div className={styles.detailBox}>
            <h1>Some other content</h1>
          </div> */}
        {/* <Parallax className="custom-class" y={[-70, 70]} tagOuter="figure"> */}
          <StaticImage 
            // height={1000}
            src="../../assets/images/hallway.jpg"
            alt="header image"
            className="hero-img"
            placeholder="blurred"
          />
        {/* </Parallax> */}

    </header>
  )
}

export default Hero
