import React from "react";
import SideLinks from "./SideLinks";
import { FaTimes } from "react-icons/fa";
import PropTypes from 'prop-types';
import './Sidebar.css'; 

const Sidebar = ({
  isOpen,
  toggleSidebar}) => {
  return <aside className={`sidebar ${isOpen? 'show-sidebar' : ''}`} data-test="component-sidebar" >
    <button className="close-btn" onClick={toggleSidebar} data-test="component-close-button">
      <FaTimes />
    </button>
    <div className="side-container">
      <SideLinks styleClass={`${isOpen? 'sidebar-links-animate' : ''} sidebar-links`} toggle={toggleSidebar}/>
    </div>

  </aside>
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func,
}

export default Sidebar