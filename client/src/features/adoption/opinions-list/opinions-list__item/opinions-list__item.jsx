import './opinions-list__item.css';
import { getFormattedDate } from '../../../../helpers';

export default function OpinionsListItem({ body, user, createdAt }) {
  const formattedDate = getFormattedDate(createdAt, 'full');
  return (
    <li className="opinions-list__item">
      <h3 className="opinions-list__item-header">
        {`${user.firstName} ${user.lastName}`}
        {' - '}
        <span className="opinions-list__item-date">{formattedDate}</span>
      </h3>
      <p className="opinions-list__item-body">{body}</p>
    </li>
  );
}
