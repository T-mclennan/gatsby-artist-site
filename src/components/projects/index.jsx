import React from 'react';
import Project from './Project';
import Title from '~components/Title';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import * as styles from './Project.module.css';


function Projects({projects, title, showLink}) {

  return (
    <section className={styles.section}>
      <Title title={title} />
      <div className={`${styles.projectsCenter} ${styles.sectionCenter}`}>
        {projects.map((project) => {
          return <Project key={project.id} {...project}/>
        })}
      </div>
      {showLink && <Link to="/projects" className="btn center-btn">all projects</Link>}
    </section>
  )
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  showLink: PropTypes.bool,
}

export default Projects;