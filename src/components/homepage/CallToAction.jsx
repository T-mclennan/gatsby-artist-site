import React from 'react';
import {Link} from 'gatsby';
import spray from '../../assets/images/spray.png';
import * as styles from './CallToAction.module.css';

function CallToAction() {

  return (
    <section className={styles.callToAction}>
      <article className={styles.container}>
        <div className={styles.title}
          data-sal="slide-up"
          data-sal-duration="500" 
          data-sal-delay="0" 
          data-sal-easing="ease" 
        >Professional Artists</div>
        <p data-sal="slide-up" data-sal-duration="500" data-sal-delay="150" data-sal-easing="ease">
        Based in Santa Cruz California, we're an artist group with a variety of styles and mediums.  
          Let us help with your next dream project. Feel free to contact us for more details. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <p data-sal="slide-up" data-sal-duration="500" data-sal-delay="150" data-sal-easing="ease">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, 
          amet est aliquid facere corrupti enim officia odit molestiae
          unde nostrum tempore aut dignissimos cupiditate iste.</p>
          
          <Link to="/about" className="btn-solid center-btn">Learn More</Link>
          <Link to="/contact" className="clear-btn center-btn">contact us</Link>
      </article>
    </section>
  )
}

export default CallToAction
