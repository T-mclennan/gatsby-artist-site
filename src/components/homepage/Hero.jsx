import React from "react"
import { Link } from "gatsby";
import socialLinks from "../../constants/social_links";
import { Parallax } from 'react-scroll-parallax';
import { StaticImage } from "gatsby-plugin-image";
import HeroNav from './HeroNav';
import BgImage from '../BgImage';
import * as styles from './Hero.module.css';


const Hero = () => {
  return (
    <header className={styles.hero}>

        <HeroNav />
        <div className={styles.heroDetails}>
          <div className={styles.heroText}>
            {/* <h3 className={styles.heroText}>Graff and Stuff</h3> */}
            <h1 className={styles.heroText}>Graff and Stuff</h1>
            <Link to="/about" className="btn center-btn">
              See Gallery
            </Link>
          </div>
        </div>

        <div className={styles.background}>
          <StaticImage 
            src="../../assets/images/hallway.jpg"
            alt="header image"
            className="hero-img"
            placeholder="blurred"
          />
        </div>

    </header>
  )
}

export default Hero
