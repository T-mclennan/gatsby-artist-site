import React from "react";
import Seo from "../components/Seo";
import PageWrapper from "../components/PageWrapper";
import ContactForm from "../components/input/ContactForm";
import * as styles from './contact.module.css';

const contact = () => {
  return (
    <PageWrapper>
      <section className={styles.formContainer}>
        <p className={styles.header}>Contact Us</p>
        <ContactForm />
      </section>
    </PageWrapper>
  )
}

export default contact
