import React from 'react';
import { HamburgerSlider } from 'react-animated-burgers';
import * as styles from './Navbar.module.css';

function HamburgerButton({open, toggle}) {

  return (
    <div className={styles.hamburgerContainer}>
      <HamburgerSlider buttonWidth={35} isActive={open} toggleButton={toggle} barColor="#d4380d" />
    </div>
  )
}

export default HamburgerButton;
