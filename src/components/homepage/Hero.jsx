import React from "react"
import { Link } from "gatsby";
import socialLinks from "../../constants/social_links";
import { StaticImage } from "gatsby-plugin-image";
import HeroNav from './HeroNav';
import * as styles from './Hero.module.css';


const Hero = () => {
  return (
    <header className={styles.hero}>

        <HeroNav />
        <div className={styles.heroDetails}>
          <div className={styles.heroText}       
            data-sal="slide-up"
            data-sal-duration="1000" 
            data-sal-delay="300" 
            data-sal-easing="ease" 
          >
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
