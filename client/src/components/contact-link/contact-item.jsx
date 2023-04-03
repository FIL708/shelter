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
  console.log(linkHref);

  return (
    <li className="contact-item">
      <Icon type={type} />
      <a href={linkHref}>{text}</a>
    </li>
  );
}
