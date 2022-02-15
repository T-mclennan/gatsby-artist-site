import React from 'react';
import Seo from "~components/Seo";
import PropTypes from "prop-types";
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

PageWrapper.propTypes = {
  pageName: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

export default PageWrapper;
