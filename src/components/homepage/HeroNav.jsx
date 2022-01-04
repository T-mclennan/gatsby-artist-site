import React from "react";
import logo from "../../assets/images/Stuff.svg";
import { FaAlignRight } from "react-icons/fa";
import pageLinks from "../../constants/links";
import { Link } from "gatsby";
import * as styles from '../layout/Navbar.module.css';

const HeroNav = () => {

  return ( 
    <nav className={styles.heroNav}
      data-sal="fade"
      data-sal-duration="1000" 
      data-sal-delay="750" 
      // data-sal-easing="easeInOutBack" 
    >
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to={"/"} style={{marginTop: 5}}>
            <img src={logo} alt="graff and stuff" />
          </Link>
          <button type="button" className={styles.toggleBtn} aria-label="menu">
            <FaAlignRight />
          </button>
        </div>
        <div className={styles.navLinks}>
          {pageLinks.map((link) => {
            return <Link key={link.id} to={link.url}>
              {link.text}
            </Link>
          })}
        </div>
      </div>
    </nav>
  )
}

export default HeroNav;