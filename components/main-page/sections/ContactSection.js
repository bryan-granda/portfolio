import styles from './ContactSection.module.scss';
import { useEffect, memo, useRef, useState, useTimeout } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import InputField from '../../../components/inputs/InputField';
import InputArea from '../../../components/inputs/InputArea';
import ContactMeForm from '../../forms/ContactMeForm';
import LoadingSpinner from '../../../components/UI/LoadingSpinner';

function ContactSection() {
  // Animation on scroll
  useEffect(() => {
    aos.init({ duration: 2000 });

    return () => aos.init({ duration: 0 });
  }, []);

  return (
    <section id='contact-me' className={styles['contact-section']} data-aos='slide-left' data-aos-once='true'>
      {/* Heading */}
      <h2 className={styles['contact-section__heading']}>Let's get in touch.</h2>
      {/* Contact Form*/}
      <ContactMeForm />
      {/* Closing Tag */}
      <h2 className={styles['contact-section__closing-tag']}>{`</ Thanks for stopping by. >`}</h2>
    </section>
  );
}

export default memo(ContactSection);
