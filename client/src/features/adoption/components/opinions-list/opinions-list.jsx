import { useContext } from 'react';
import { UserContext } from '../../../..';
import Opinion from './opinion/opinion.jsx';
import NewOpinion from './new-opinion/new-opinion.jsx';
import './opinions-list.css';

export default function OpinionsList({
  opinions,
  toggleEditMode,
  confirmOpinionChanges,
  deleteOpinion,
  createNewOpinion,
  newOpinion,
  newOpinionHandler,
}) {
  const { user } = useContext(UserContext);
  console.log(user);

  if (!opinions) return false;
  return (
    <ul className="opinions-list">
      <NewOpinion
        createNewOpinion={createNewOpinion}
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
          confirmOpinionChanges={confirmOpinionChanges}
          deleteOpinion={deleteOpinion}
        />
      ))}
    </ul>
  );
}
