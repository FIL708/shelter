import { Icon } from '../index.js';
import './contact-item.css';

export default function ContactLink({ text, type, href }) {
  let linkHref;
  if (type === 'email') {
    linkHref = `mailto:${text}`;
  } else if (type === 'phone') {
    linkHref = `tel:${text}`;
  } else {
    linkHref = href;
  }

  return (
    <li className="contact-link">
      <Icon type={type} size="15px" fill="#FFF2F2" />
      <a
        href={linkHref}
        className="contact-link__item"
        target="_blank"
        rel="noreferrer"
      >
        {text}
      </a>
    </li>
  );
}
