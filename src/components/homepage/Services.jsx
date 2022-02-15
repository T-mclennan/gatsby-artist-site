import React from 'react';
import Title from '../Title';
import { Link } from "gatsby";
import services from '../../constants/services';
import * as styles from './Services.module.css';

function Services() {
  return (
    <section className={styles.tagContainer}>
      <Title title="Our Services"
        data-sal="slide-up"
        data-sal-duration="500" 
        data-sal-delay="0" 
        data-sal-easing="ease" 
      />
      <div className={`${styles.servicesCenter} section-center`}>
        {services.map((service, i) => {
          const {id, icon, title, text} = service;
          return (
            <article key={id} className={styles.service}>
              {icon}
              <h4>{title}</h4>
              <div className="underline" />
              <p className="text">{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  )
}

export default Services;
