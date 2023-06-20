import Opinion from './opinion/opinion.jsx';
import './opinions-list.css';

export default function OpinionsList({
  opinions,
  toggleEditMode,
  confirmOpinionChanges,
  deleteOpinion,
}) {
  if (!opinions) return false;
  return (
    <ul className="opinions-list">
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
