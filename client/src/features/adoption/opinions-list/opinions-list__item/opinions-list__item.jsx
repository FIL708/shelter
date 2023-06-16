import './opinions-list__item.css';
import OpinionsListButtons from '../opinions-list__buttons/opinions-list__buttons.jsx';
import { getFormattedDate } from '../../../../utils';

export default function OpinionsListItem({
  body,
  user,
  updatedAt,
  updateOpinion,
  deleteOpinion,
}) {
  if (!body) return false;
  const formattedDate = getFormattedDate(updatedAt, 'full');
  return (
    <li className="opinions-list__item">
      <h3 className="opinions-list__item-header">
        {`${user.firstName} ${user.lastName}`}
        {' - '}
        <span className="opinions-list__item-date">{formattedDate}</span>
        <OpinionsListButtons
          updateOpinion={updateOpinion}
          deleteOpinion={deleteOpinion}
        />
      </h3>
      <p className="opinions-list__item-body">{body}</p>
    </li>
  );
}
