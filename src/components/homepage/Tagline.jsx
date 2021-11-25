import React from 'react';
import Title from '../Title';
import { Link } from "gatsby";
import services from '../../constants/services';
import * as styles from './Tagline.module.css';



function Tagline() {
  return (
    <section className={styles.tagContainer}>
      <Title title="Professional Street Art"/>
      <div className={`${styles.servicesCenter} section-center`}>
        {services.map((service) => {
          const {id, icon, title, text} = service;
          return <article key={id} className={styles.service}>
            {icon}
            <h4>{title}</h4>
            <div className="underline" />
            <p className="text">{text}</p>
          </article>;
        })}
      </div>
      {/* <div className={styles.contentBlock}>
        <p>Based in Santa Cruz California, we're an artist group with a variety of styles and mediums.  
          Let us help with your next dream project. Feel free to contact us for more details. 
        </p>
      </div>
      <Link to="/about" className="btn center-btn">
        Learn More
      </Link> */}
    </section>
  )
}

export default Tagline
