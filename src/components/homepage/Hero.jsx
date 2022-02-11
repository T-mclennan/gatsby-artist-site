import React from "react"
import { Link } from "gatsby";
import socialLinks from "../../constants/social_links";
import background from '../../assets/images/optimized/octopus.webp';
import FixedBackground from '../../components/homepage/FixedBackground';
import HeroNav from './HeroNav';
import * as styles from './Hero.module.css';

const Hero = () => {
  return (
    <FixedBackground height={100} image={background} gradient='linear-gradient(rgba(230, 100, 101, 0.8), rgba(145, 152, 229, 0.8))'>
      <HeroNav />
        <div className={styles.heroText}       
          data-sal="slide-up"
          data-sal-duration="1000" 
          data-sal-delay="300" 
          data-sal-easing="ease" 
        >
          <h1 className={styles.heroText}>Graff and Stuff</h1>
          <Link to="/gallery" className="btn center-btn">
            See Gallery
          </Link>
        </div>
    </FixedBackground>
  )
}

export default Hero
