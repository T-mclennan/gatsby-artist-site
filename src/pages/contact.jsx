import React from "react";
import PageWrapper from "~layout/PageWrapper";
import { FixedBackground } from "~homepage"
import ContactForm from "~input/ContactForm";
import * as styles from './contact.module.css';
import bg from '../assets/images/optimized/guy-spray.webp'
const contact = () => {
  
  return (

    <FixedBackground height='100%' image={bg} gradient='linear-gradient(rgba(230, 100, 101, 0.8), rgba(145, 152, 229, 0.8))'>
      <PageWrapper pageName="Contact Us">
        <section className={styles.formContainer}>
          <p className={styles.header}>Contact Us</p>
          <ContactForm />
        </section>
      </PageWrapper>
    </FixedBackground>
  )
}

export default contact
