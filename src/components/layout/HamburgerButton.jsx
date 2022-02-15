import React from 'react';
import { HamburgerSlider } from 'react-animated-burgers';
import PropTypes from "prop-types";
import * as styles from './Navbar.module.css';

function HamburgerButton({open, toggle}) {

  return (
    <div className={styles.hamburgerContainer}>
      <HamburgerSlider buttonWidth={35} isActive={open} toggleButton={toggle} barColor="#d4380d" />
    </div>
  )
}

HamburgerButton.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
}

export default HamburgerButton;
