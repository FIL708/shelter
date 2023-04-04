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
            Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos.
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
