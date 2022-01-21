import React from "react"
// import socialLinks from "../constants/social_links"
import './Footer.css'


const Footer = () => {
  return (<footer className="footer">
      <div>
        <h5>copyright&copy;{new Date().getFullYear()}
          <span>Graff and Stuff</span> all rights reserved
        </h5>
      </div>
    </footer>)
}

export default Footer