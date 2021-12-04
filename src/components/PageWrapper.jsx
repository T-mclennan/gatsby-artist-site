import React from 'react';
import * as styles from './PageWrapper.module.css';


const PageWrapper = ({children}) => {

  return (
    <section className={styles.page}>
      {children}
    </section>
  )
}

export default PageWrapper;
