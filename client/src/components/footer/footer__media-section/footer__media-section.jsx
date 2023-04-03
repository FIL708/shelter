import ContactLink from '../../contact-link/contact-item';
import './footer__media-section.css';

export default function FooterMediaSection() {
  return (
    <section className="footer__media-section">
      <h2>Newsletter:</h2>
      <h2>Follow us:</h2>
      <ul className="footer__media-section__links">
        <ContactLink type="facebook" />
        <ContactLink type="facebook" />
        <ContactLink type="facebook" />
        <ContactLink type="facebook" />
        <ContactLink type="facebook" />
      </ul>
    </section>
  );
}
