import React from "react";
import SideLinks from "./SideLinks";
import PropTypes from 'prop-types';
import './Sidebar.css'; 

const Sidebar = ({
  isOpen,
  toggleSidebar}) => {
  return (  
    <aside className={`sidebar ${isOpen? 'show-sidebar' : ''}`} data-testid="component-sidebar" >
      <div className="side-container">
        <SideLinks styleClass={`${isOpen? 'sidebar-links-animate' : ''} sidebar-links`} toggle={toggleSidebar}/>
      </div>
    </aside>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
}

export default Sidebar