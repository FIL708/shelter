import { ContactLink } from '../../index.js';

import './footer__contact-section.css';

export default function FooterContactSection() {
  return (
    <section className="footer__contact-section">
      <h2 className="footer__contact-section_title">Contact:</h2>
      <ul>
        <ContactLink type="email" text="asd@asd.com" />
        <ContactLink type="phone" />
        <ContactLink type="location" />
      </ul>
    </section>
  );
}
