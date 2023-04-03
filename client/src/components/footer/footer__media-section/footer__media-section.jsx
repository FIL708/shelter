import ContactLink from '../../contact-link/contact-item';
import { Textfield, Button } from '../../index.js';
import './footer__media-section.css';

export default function FooterMediaSection() {
  return (
    <section className="footer__media-section">
      <h2 className="footer__section-title">Newsletter:</h2>
      <Textfield />
      <Button />
      <h2 className="footer__section-title">Follow us:</h2>
      <ul className="footer__media-section__links">
        <ContactLink
          type="facebook"
          href="https://www.facebook.com/"
          iconSize="30px"
        />
        <ContactLink
          type="instagram"
          href="https://www.instagram.com/"
          iconSize="30px"
        />
        <ContactLink
          type="twitter"
          href="https://www.twitter.com/"
          iconSize="30px"
        />
        <ContactLink
          type="youtube"
          href="https://www.youtube.com/"
          iconSize="30px"
        />
        <ContactLink
          type="linkedin"
          href="https://www.linkedin.com/"
          iconSize="30px"
        />
      </ul>
    </section>
  );
}
