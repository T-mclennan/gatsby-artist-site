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
        <HeroNav />
        <div className={styles.heroDetails}>
          <div className={styles.heroText}>
            <h1 className={styles.heroText}>Santa Cruz Street Art</h1>
            <Link to="/about" className="btn center-btn">
              See Gallery
            </Link>
          </div>
        </div>

        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
          <StaticImage 
            // height={1000}
            src="../../assets/images/hallway.jpg"
            alt="header image"
            className="hero-img"
            placeholder="blurred"
          />
        </Parallax>

    </header>
  )
}

export default Hero
