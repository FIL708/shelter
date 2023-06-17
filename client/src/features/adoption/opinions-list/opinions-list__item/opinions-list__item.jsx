import { useState } from 'react';
import { Textarea } from '../../../../components/form';
import { getFormattedDate } from '../../../../utils';
import OpinionsListButtons from '../opinions-list__buttons/opinions-list__buttons.jsx';
import './opinions-list__item.css';

export default function OpinionsListItem({
  id,
  body,
  user,
  userId,
  updatedAt,
  updateOpinion,
  deleteOpinion,
}) {
  const [editMode, setEditMode] = useState(false);

  const changeMode = () => {
    setEditMode((prev) => !prev);
  };

  if (!body) return false;

  const formattedDate = getFormattedDate(updatedAt, 'full');
  return (
    <li className="opinions-list__item">
      <h3 className="opinions-list__item-header">
        <span className="opinions-list__item-user">
          {`${user.firstName} ${user.lastName}`}
        </span>
        <span className="opinions-list__item-date">{formattedDate}</span>
        <OpinionsListButtons
          editMode={editMode}
          opinionId={id}
          opinionAuthorId={userId}
          updateOpinion={updateOpinion}
          changeMode={changeMode}
          deleteOpinion={deleteOpinion}
        />
      </h3>
      {editMode ? (
        <Textarea />
      ) : (
        <p className="opinions-list__item-body">{body}</p>
      )}
    </li>
  );
}
