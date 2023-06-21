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
  if (!opinions) return false;
  return (
    <ul className="opinions-list">
      <NewOpinion
        createNewOpinion={createNewOpinion}
        newOpinion={newOpinion}
        newOpinionHandler={newOpinionHandler}
      />
      {opinions.map((opinion) => (
        <Opinion
          key={opinion.id}
          {...opinion}
          toggleEditMode={toggleEditMode}
          confirmOpinionChanges={confirmOpinionChanges}
          deleteOpinion={deleteOpinion}
        />
      ))}
    </ul>
  );
}
