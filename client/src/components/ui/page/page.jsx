import { useState } from 'react';
import { Header, Footer } from 'components/ui';
import { inputValidator } from 'utils';
import './page.css';
import { AnimatePresence, motion } from 'framer-motion';

export default function Page({ children }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterValidation, setNewsletterValidation] = useState({
    isValid: null,
    message: '',
  });

  const handleNewsletterInput = (event) => {
    setNewsletterEmail(event.target.value);
  };
  const handleNewsletterValidation = (event, validationType) => {
    const validationObject = inputValidator(event.target.value, validationType);
    setNewsletterValidation(validationObject);
  };
  const sendNewsLetter = () => {
    if (newsletterValidation.isValid) {
      console.log('Sending!');
    } else {
      console.log('Not sending');
    }
  };
  return (
    <>
      <Header />
      <AnimatePresence>
        <motion.main
          className="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
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
