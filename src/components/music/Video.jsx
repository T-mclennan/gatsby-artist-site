import React from "react";
import PropTypes from "prop-types";
import * as styles from './Video.module.css';

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className={styles.iframeContainer}>
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      {...props}
    />
  </div>
)

Video.propTypes = {
  videoSrcURL: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
}

export default Video;