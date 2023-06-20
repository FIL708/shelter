import Opinion from './opinion/opinion.jsx';
import NewOpinion from './new-opinion/new-opinion.jsx';
import './opinions-list.css';

export default function OpinionsList({
  opinions,
  toggleEditMode,
  confirmOpinionChanges,
  deleteOpinion,
  createNewOpinion,
}) {
  if (!opinions) return false;
  return (
    <ul className="opinions-list">
      <NewOpinion createNewOpinion={createNewOpinion} />
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
