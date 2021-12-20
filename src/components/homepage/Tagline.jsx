import React from 'react';
import Title from '../Title';
import { Link } from "gatsby";
import services from '../../constants/services';
import * as styles from './Tagline.module.css';



function Tagline() {
  return (
    <section className={styles.tagContainer}>
      <Title title="Professional Street Art"
        data-sal="slide-up"
        data-sal-duration="500" 
        data-sal-delay="0" 
        data-sal-easing="ease" 
      />
      <div className={`${styles.servicesCenter} section-center`}>
        {services.map((service, i) => {
          const {id, icon, title, text} = service;
          const delay = 100 + (i)*200;
          return (
            <article key={id} className={styles.service}
              data-sal="zoom-in"
              data-sal-duration="700" 
              data-sal-delay={delay} 
              data-sal-easing="ease" 
            >
              {icon}
              <h4>{title}</h4>
              <div className="underline" />
              <p className="text">{text}</p>
            </article>
          );
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
