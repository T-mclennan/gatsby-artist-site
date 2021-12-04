import React, { useState, useEffect } from "react";
import logo from "../../assets/images/Stuff.svg";
import { FaAlignRight } from "react-icons/fa";
import pageLinks from "../../constants/links";
import { Link } from "gatsby";
import HamburgerButton from './HamburgerButton';
import * as styles from './Navbar.module.css';

const Navbar = ({ isOpen, toggleSidebar }) => {

  const [navType, setNavType] = useState('invisible');

  const navRef = React.useRef();
  navRef.current = navType;

  const dependencies = typeof window !== "undefined" ? [window.location.pathname] : []

  useEffect(() => {
    setNavType()
    if (window.location.pathname === '/') {
      setNavType('invisible')
    } else {
      setNavType('navbar')
    }

    const handleScroll = () => {
      const show = window.scrollY > 650
      setNavType(show ? 'navbar' : 'invisible')
    }
    document.addEventListener('scroll', handleScroll);
    return () => {
        document.removeEventListener('scroll', handleScroll)
    }
  }, dependencies)



  return ( 
    <nav className={navType === 'navbar' ? styles.navbar : styles.invisible}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to={"/"} style={{marginTop: 5}}>
            <img src={logo} alt="graff and stuff" />
          </Link>

        <HamburgerButton open={isOpen} toggle={toggleSidebar} aria-label="menu"/>

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

export default Navbar
