import { useState } from 'react';
import { Textarea } from 'components/form';
import { getFormattedDate } from '../../../../../utils';
import OpinionButtons from '../opinion__buttons/opinion__buttons.jsx';
import './opinion.css';

export default function Opinion({
  id,
  body,
  user,
  userId,
  updatedAt,
  deleteOpinion,
  updateOpinion,
  loggedUser,
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
    updateOpinion(id, opinionText);
    toggleEditMode();
  };

  if (!body) return false;

  const formattedDate = getFormattedDate(updatedAt, 'full');
  return (
    <li className="opinion">
      <h3 className="opinion__header">
        <img className="opinion__avatar" src={user.avatar} alt="user avatar" />
        <span className="opinion__user">
          {`${user.firstName} ${user.lastName}`}
        </span>
        <span className="opinion__date">{formattedDate}</span>
        <OpinionButtons
          opinionAuthorId={userId}
          editMode={editMode}
          confirmChanges={confirmChanges}
          cancelOpinionChanges={cancelOpinionChanges}
          toggleEditMode={toggleEditMode}
          deleteOpinion={() => deleteOpinion(id)}
          loggedUser={loggedUser}
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
        <p className="opinion__body">{body}</p>
      )}
    </li>
  );
}
