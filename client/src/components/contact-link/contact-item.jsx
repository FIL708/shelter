import { Icon } from '../index.js';
import './contact-item.css';

export default function ContactLink({ text, type, href }) {
  let linkHref;
  let targetOption = '';
  if (type === 'email') {
    linkHref = `mailto:${text}`;
  } else if (type === 'phone') {
    linkHref = `tel:${text}`;
  } else {
    linkHref = href;
    targetOption = '_blank';
  }

  return (
    <li className="contact-link">
      <Icon type={type} size="15px" fill="#FFF2F2" />
      <a
        href={linkHref}
        className="contact-link__item"
        target={targetOption}
        rel="noreferrer"
      >
        {text}
      </a>
    </li>
  );
}
