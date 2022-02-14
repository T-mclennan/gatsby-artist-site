import React from 'react'
import * as styles from './Services.module.css';

function Services() {


  return (
    <section className={styles.services}>
      <h1 >Services Section</h1>
      <div className={styles.grid}>

        <div>
          <h3>Some text here</h3>
          <p>lorem ipsum dolor sit amet, con lorelorem ipsum dolor sit amet, con lore lorem ipsum dolor sit amet, con lorelorem ipsum dolor sit amet, con lore</p>
        </div>

        <div>
          <h3>Some text here</h3>
          <p>lorem ipsum dolor sit amet, con lorelorem ipsum dolor sit amet, con lore</p>
        </div>

        <div>
          <h3>Some text here</h3>
          <p>lorem ipsum dolor sit amet, con lorelorem ipsum dolor sit amet, con lore</p>
        </div>
      </div>
    </section>
  )
}

export default Services;
