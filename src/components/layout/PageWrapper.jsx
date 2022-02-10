import React from 'react';
import * as styles from './PageWrapper.module.css';


const PageWrapper = ({children}) => {

  return (
    <main className={styles.page}>
      {children}
    </main>
  )
}

export default PageWrapper;
