import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import "../../assets/css/main.css"

const Layout = ({children}) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen}/>
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen}/>
      {children}
      <Footer/>
    </>
  )
}


export default Layout
