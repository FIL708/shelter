import FooterContactSection from './footer__contact-section/footer__contact-section.jsx';
import FooterMediaSection from './footer__media-section/footer__media-section.jsx';
import './footer.css';
import logo from './assets/logo.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="shelter logo" className="footer__logo" />
      <hr className="footer__divider" />
      <FooterContactSection />
      <section>
        <h2 className="footer__section-title">Our mission:</h2>
        <p>
          Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos.
        </p>
      </section>
      <FooterMediaSection />
    </footer>
  );
}
