import React from "react"
// import socialLinks from "../constants/social_links"
import './Footer.css'


const Footer = () => {
  return (<footer className="footer">
      <div>
        <h4>copyright&copy;{new Date().getFullYear()}
          <span>Graff and Stuff</span> all rights reserved
        </h4>
      </div>
    </footer>)
}

export default Footer