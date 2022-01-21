import React from 'react'
import background from '../../assets/images/octopus.jpg';
import * as styles from './Hero3.module.css';

function Hero3() {
  return (
    <div className={styles.wrapper}> 
      <div className={`${styles.fixedBg}`} style={{backgroundImage: `url(${background})`}}>
        <h1>Fixed Background scrolling</h1>
      </div>
      
      <div className={styles.scrollBg}>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna. Etiam sodales arcu at lectus porttitor accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur id urna dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin et pharetra justo, quis suscipit risus. Maecenas tincidunt efficitur ex in pharetra.</h3>
      </div>
      
      <div className={`${styles.fixedBg} ${styles.bg2}`}>
        <h1>Fixed Background scrolling</h1>
      </div>
      
      <div className={styles.scrollBg}>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna.</h3>
      </div>
      
      <div className={`${styles.fixedBg} ${styles.bg3}`}>
        <h1>Fixed Background scrolling</h1>
      </div>
    </div> 
  )
}

export default Hero3
