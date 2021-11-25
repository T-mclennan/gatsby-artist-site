import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import styles from './BgImage.module.css';

const BgImage = ({
  overlayColor,
  children,
}) => (
  <div style={{position: 'relative', backgroundColor: overlayColor}}>
    <StaticImage
      // className={styles.fakeBgImage}
      // style={{height: height}}
      // fluid={fluid}
      // title={title}
      // height={height}
      // mobileHeight={mobileHeight}
      // height={1000}
      src="../../assets/images/hallway.jpg"
      alt="header image"
      // className={styles.fakeBgImage}
      placeholder="blurred"
    />
    <div >{children}</div>
  </div>
);

export default BgImage;