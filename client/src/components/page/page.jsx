import { useState } from 'react';
import { Header, Footer } from '../index.js';
import { inputValidator } from '../../helpers';
import './page.css';

export default function Page({ children }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterValidation, setNewsletterValidation] = useState({});

  const handleNewsletterInput = (event) => {
    setNewsletterEmail(event.target.value);
  };
  const handleNewsletterValidation = (event, validationType) => {
    const validationObject = inputValidator(event, validationType);
    setNewsletterValidation(validationObject);
  };
  const sendNewsLetter = () => {
    console.log(newsletterEmail);
  };
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer
        handleNewsletterInput={handleNewsletterInput}
        newsletterEmail={newsletterEmail}
        handleNewsletterValidation={handleNewsletterValidation}
        newsletterValidation={newsletterValidation}
        sendNewsLetter={sendNewsLetter}
      />
    </>
  );
}
