import './opinions-list__item.css';
import { Button } from '../../../../components/form';
import { getFormattedDate } from '../../../../utils';

export default function OpinionsListItem({ body, user, updatedAt }) {
  if (!body) return false;
  const formattedDate = getFormattedDate(updatedAt, 'full');
  return (
    <li className="opinions-list__item">
      <h3 className="opinions-list__item-header">
        {`${user.firstName} ${user.lastName}`}
        {' - '}
        <span className="opinions-list__item-date">{formattedDate}</span>
      </h3>
      <p className="opinions-list__item-body">{body}</p>
      <div className="opinions-list__buttons">
        <Button iconType="edit" iconFill="#7286d3" iconSize="18px" />
        <Button iconType="exit" iconFill="#9f3e3e" iconSize="18px" />
      </div>
    </li>
  );
}
