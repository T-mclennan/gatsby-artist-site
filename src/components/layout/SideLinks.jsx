import React from 'react';
import { Link } from "gatsby";
import data from '../../constants/links';
import PropTypes from "prop-types";
import './Sidebar.css';

const SideLinks = ({ styleClass = '', toggle }) => {
  return (
    <ul className={`page-links ${styleClass}`}>
      {data.map(link => {
        return (
          <li key={link.id}>
            {toggle ? 
              <Link  to={link.url} onClick={() => toggle()}>{link.text}</Link> :
              <Link  to={link.url} >{link.text}</Link>
            }
          </li>
        )
      })}
    </ul>
  )
}

SideLinks.propTypes = {
  styleClass: PropTypes.string,
  toggle: PropTypes.func.isRequired
}


export default SideLinks
