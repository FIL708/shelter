import FooterContactSection from './footer__contact-section/footer__contact-section.jsx';
import FooterMediaSection from './footer__media-section/footer__media-section.jsx';
import './footer.css';
import logo from './assets/logo.svg';

export default function Footer({
  handleNewsletterInput,
  newsletterEmail,
  handleNewsletterValidation,
  newsletterValidation,
  sendNewsLetter,
}) {
  return (
    <footer className="footer">
      <img src={logo} alt="shelter logo" className="footer__logo" />
      <hr className="footer__divider" />
      <div className="footer__content">
        <FooterContactSection />
        <section className="footer__mission-section">
          <h2 className="footer__section-title">Our mission:</h2>
          <p className="footer__description">
            At HelpMeDude!, we believe that every pet deserves a second chance
            at happiness, and that is why our main mission is to connect
            homeless pets with loving families who will provide them with a safe
            and nurturing environment. We are dedicated to improving the lives
            of these furry friends
          </p>
        </section>
        <FooterMediaSection
          handleNewsletterInput={handleNewsletterInput}
          newsletterEmail={newsletterEmail}
          handleNewsletterValidation={handleNewsletterValidation}
          newsletterValidation={newsletterValidation}
          sendNewsLetter={sendNewsLetter}
        />
      </div>
    </footer>
  );
}
