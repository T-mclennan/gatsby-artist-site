import React from "react"
import { Link } from "gatsby";
import * as styles from './HeroContent.module.css';


const HeroContent = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <h1>
          Street <span>Art</span>  <br/> and murals <br/> freshly made.
        </h1>
        <p>
          Local street art in Santa Cruz, California. <br/> the buyers by making them satsified.
        </p>
        <div className={styles.btnGroup}>
          <Link to="/about"className={styles.galleryBtn}>See Gallery </Link>
          <Link className={styles.contactBtn}>Get Quote </Link>
        </div>
      </div>
    </>
  )
}

export default HeroContent
