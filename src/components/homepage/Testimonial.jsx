import React from 'react';
import * as styles from './Testimonial.module.css';
import headshot from '../../assets/images/profile-pic.jpg';
import bg2 from '../../assets/images/optimized/char-beck.webp';
import { FixedBackground } from "~homepage";
import GradientWrapper from '../GradientWrapper';

function Testimonial() {

  const imageGradient = 'linear-gradient(rgba(11, 16, 63, 0.8), rgba(20, 25, 80, 0.8))';

  return (
    <FixedBackground image={bg2} gradient={imageGradient} height='80vh'>
      <section className={styles.testimonials}>
          <div className={styles.testimonial}>
            <div data-sal="fade"
                data-sal-duration="400" 
                data-sal-delay="0" 
                data-sal-easing="ease">
              <GradientWrapper primaryColor="#ff7a45" secondaryColor="#ffbb96" iconStyle={styles.quote} />
            </div>
            <div className={styles.testimonialTextBox}
                data-sal="slide-up"
                data-sal-duration="600" 
                data-sal-delay="100" 
                data-sal-easing="ease" >
              <p>"Absolutely glorious! Adel and Kays changed my life. I wish there were more hours in the day so I could spend more time with Graff and Stuff."</p>
            </div>
            <div className={styles.testimonialCustomer}
                data-sal="flip-up"
                data-sal-duration="600" 
                data-sal-delay="350" 
                data-sal-easing="ease" >
              <img src={headshot} alt="profile"/>
              <div>
                <h2>Brian G.</h2>
                <h5>Santa Cruz store owner</h5>
              </div>
            </div>
          </div>
      </section>
    </FixedBackground>
  )
}

export default Testimonial;
