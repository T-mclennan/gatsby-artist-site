import React, { useState, useEffect } from "react";
import logo from "../../assets/images/Stuff.svg";
import { FaAlignRight } from "react-icons/fa";
import pageLinks from "../../constants/links";
import { Link } from "gatsby";
import * as styles from './Navbar.module.css'

const Navbar = () => {

  const [navType, setNavType] = useState('navbar');

  const navRef = React.useRef();
  navRef.current = navType;

  useEffect(() => {
    if (window.location.pathname === '/') {
      setNavType('invisible')
      console.log('turning invisible')
    }

    const handleScroll = () => {
      const show = window.scrollY > 650
      if (show) {
        setNavType('navbar')
      } else {
        setNavType('invisible')
      }
    }
    document.addEventListener('scroll', handleScroll);
    return () => {
        document.removeEventListener('scroll', handleScroll)
    }
  }, [])



  return ( 
    <nav className={navType === 'navbar' ? styles.navbar : styles.invisible}>
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

export default Navbar
