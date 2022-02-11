import React from 'react'
import * as styles from './Hero.module.css';

function FixedBackground({height, image, gradient, children}) {

  const backgroundStyle = {
    backgroundImage: gradient ? `url(${image}), ${gradient}` : `url(${image})`,
    height: `${height}vh`,
  }

  return (
    <section className={styles.hero} style={backgroundStyle}>
      {children}
    </section>
  )
}

export default FixedBackground
