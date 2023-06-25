import { useContext } from 'react';
import { UserContext } from '../../../..';
import Opinion from './opinion/opinion.jsx';
import NewOpinion from './new-opinion/new-opinion.jsx';
import './opinions-list.css';

export default function OpinionsList({
  opinions,
  toggleEditMode,
  updateOpinion,
  deleteOpinion,
  createOpinion,
  newOpinion,
  newOpinionHandler,
}) {
  const { user } = useContext(UserContext);

  if (!opinions) return false;
  return (
    <ul className="opinions-list">
      <NewOpinion
        createOpinion={createOpinion}
        newOpinion={newOpinion}
        newOpinionHandler={newOpinionHandler}
        loggedUser={user}
      />
      {opinions.map((opinion) => (
        <Opinion
          key={opinion.id}
          {...opinion}
          loggedUser={user}
          toggleEditMode={toggleEditMode}
          updateOpinion={updateOpinion}
          deleteOpinion={deleteOpinion}
        />
      ))}
    </ul>
  );
}
