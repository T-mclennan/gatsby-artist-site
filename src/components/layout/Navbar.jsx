import React, { useState, useEffect } from "react";
import logo from "../../assets/images/Stuff.svg";
import pageLinks from "../../constants/links";
import { Link } from "gatsby";
import HamburgerButton from './HamburgerButton';
import * as styles from './Navbar.module.css';

const Navbar = ({ isOpen, toggleSidebar }) => {

  const [navType, setNavType] = useState('invisible');
  const dependencies = typeof window !== "undefined" ? [window.location.pathname] : []

  useEffect(() => {
    if (window.location.pathname === '/') {
      setNavType('invisible')
      const handleScroll = () => {
        const show = window.scrollY > 650
        setNavType(show ? 'navbar' : 'invisible')
      }
      document.addEventListener('scroll', handleScroll);
      return () => {
          document.removeEventListener('scroll', handleScroll)
      }
    } else {
      setNavType('navbar')
    }

  }, dependencies)

  return ( 
    <nav className={navType === 'navbar' ? styles.navbar : styles.invisible}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to={"/"} style={{marginTop: 5}} onClick={() => isOpen ? toggleSidebar : ''}
          >
            <img src={logo} alt="graff and stuff" />
          </Link>

        <HamburgerButton open={isOpen} toggle={toggleSidebar} aria-label="menu"/>

        </div>
        <div className={styles.navLinks}>
          {pageLinks.map((link, i) => {
            return <Link key={link.id} to={link.url}>
              {link.text}
            </Link>
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
