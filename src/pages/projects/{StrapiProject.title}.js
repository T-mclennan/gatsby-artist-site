import React from 'react';
import Seo from "~components/Seo";
import PageWrapper from "~layout/PageWrapper";
import { graphql } from "gatsby";

const ProjectTemplate = ({pageContext: {title}}) => {
  return ( 
    <PageWrapper title={title}>
      <div>
        <h4>{title}</h4>
      </div>
    </PageWrapper>
  )
}

export default ProjectTemplate;
