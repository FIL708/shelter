import { ContactLink } from 'components/ui';
import { Textfield, IconButton } from 'components/form';
import './footer__media-section.css';

export default function FooterMediaSection({
  handleNewsletterInput,
  newsletterEmail,
  handleNewsletterValidation,
  newsletterValidation,
  sendNewsLetter,
}) {
  return (
    <section className="footer__media-section">
      <h3 className="footer__section-title">Newsletter:</h3>
      <div className="footer__media-section__newsletter">
        <Textfield
          className="textfield__newsletter"
          onChange={(event) => handleNewsletterInput(event)}
          onBlur={(event) => handleNewsletterValidation(event, 'email')}
          validation={newsletterValidation}
          value={newsletterEmail}
        />
        <IconButton type="send" size="18px" onClick={sendNewsLetter} />
      </div>

      <h3 className="footer__section-title">Follow us:</h3>
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
