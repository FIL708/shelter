import { useState } from 'react';
import { Textarea } from '../../../../components/form';
import { getFormattedDate } from '../../../../utils';
import OpinionButtons from '../opinion__buttons/opinion__buttons.jsx';
import './opinion.css';

export default function Opinion({
  id,
  body,
  user,
  userId,
  updatedAt,
  deleteOpinion,
  confirmOpinionChanges,
}) {
  const [opinionText, setOpinionText] = useState(body);
  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };

  const opinionHandler = (event) => {
    const { value } = event.target;
    setOpinionText(value);
  };

  const cancelOpinionChanges = () => {
    setOpinionText(body);
    toggleEditMode();
  };

  const confirmChanges = () => {
    confirmOpinionChanges(id, opinionText);
    toggleEditMode();
  };

  if (!body) return false;

  const formattedDate = getFormattedDate(updatedAt, 'full');
  return (
    <li className="opinions-list__item">
      <h3 className="opinions-list__item-header">
        <img className="opinion__avatar" src={user.avatar} alt="user avatar" />
        <span className="opinions-list__item-user">
          {`${user.firstName} ${user.lastName}`}
        </span>
        <span className="opinions-list__item-date">{formattedDate}</span>
        <OpinionButtons
          opinionAuthorId={userId}
          editMode={editMode}
          confirmOpinionChanges={confirmChanges}
          cancelOpinionChanges={cancelOpinionChanges}
          toggleEditMode={toggleEditMode}
          deleteOpinion={() => deleteOpinion(id)}
        />
      </h3>
      {editMode ? (
        <Textarea
          value={opinionText}
          onChange={(event) => {
            opinionHandler(event);
          }}
        />
      ) : (
        <p className="opinions-list__item-body">{body}</p>
      )}
    </li>
  );
}
