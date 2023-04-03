import { Icon } from '../index.js';
import './contact-item.css';

export default function ContactLink({ text, type, href, iconSize = '15px' }) {
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
      <a
        href={linkHref}
        className="contact-link__item"
        target={targetOption}
        rel="noreferrer"
      >
        <Icon type={type} size={iconSize} fill="#FFF2F2" />
        {text}
      </a>
    </li>
  );
}
