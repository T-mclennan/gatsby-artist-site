import React from 'react'
import PropTypes from "prop-types"
import * as styles from './Hero.module.css';

function FixedBackground({height="100%", image, gradient, children}) {

  const backgroundStyle = {
    backgroundImage: gradient ? `url(${image}), ${gradient}` : `url(${image})`,
    height
  }

  return (
    <section className={styles.hero} style={backgroundStyle}>
      {children}
    </section>
  )
}

FixedBackground.propTypes = {
  height: PropTypes.string,
  image: PropTypes.string.isRequired,
  gradient: PropTypes.string,
  children: PropTypes.any,
}

export default FixedBackground
