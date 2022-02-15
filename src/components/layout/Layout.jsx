import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import useToggle from '../../hooks/useToggle';
import PropTypes from "prop-types";

import "../../assets/css/main.css"

const Layout = ({children}) => {

  const [isOpen, toggleSidebar] = useToggle(false);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen}/>
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen}/>
      <div style={{minHeight: 'calc(100vh - 6rem)' }}>
        {children}
      </div>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout;
