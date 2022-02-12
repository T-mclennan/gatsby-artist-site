import React from 'react';
import Seo from "~components/Seo";
import * as styles from './PageWrapper.module.css';


const PageWrapper = ({pageName, children}) => {

  return (
    <>
      <Seo title={pageName} />
      <main className={styles.page}>
        {children}
      </main>
    </>
  )
}

export default PageWrapper;
