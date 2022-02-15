import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import * as styles from './Project.module.css';

const Project = ({id, title, images, date, category, slug, description }) => {

  const projectImages = images[0].localFile.childrenImageSharp;
  const coverImage = getImage(projectImages[0])
  return <Link to={`/projects/${slug}`} className={styles.project} key={id}> 
    <article>
      <GatsbyImage image={coverImage} className={styles.projectImage} alt={title}/>
      <div className={styles.projectCard}>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={styles.projectFooter}>
          <p>{category}</p>
          <p>{date}</p>
        </div>
      </div>
    </article>
  </Link>
}


Project.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  date: PropTypes.string,
  category: PropTypes.string,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Project

