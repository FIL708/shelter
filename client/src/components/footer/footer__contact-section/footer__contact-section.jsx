import { ContactLink } from '../../index.js';

import './footer__contact-section.css';

export default function FooterContactSection() {
  return (
    <section className="footer__contact-section">
      <h2 className="footer__contact-section_title">Contact:</h2>
      <ul className="footer__contact-section_items">
        <ContactLink type="phone" text="+48 123 321 123" />
        <ContactLink type="email" text="helpmedude@example.com" />
        <ContactLink
          type="location"
          text={`Warsaw, Poland\nMarszalkowska street 8`}
          href="https://goo.gl/maps/iBfeZfGVwAv8fpF17"
        />
      </ul>
    </section>
  );
}
