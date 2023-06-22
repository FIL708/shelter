import { Button } from '../../../../../components/form';
import './opinion__buttons.css';

export default function OpinionButtons({
  deleteOpinion,
  toggleEditMode,
  opinionAuthorId,
  editMode,
  loggedUser,
  confirmOpinionChanges,
  cancelOpinionChanges,
}) {
  console.log(loggedUser);

  if (!loggedUser) return false;
  if (opinionAuthorId !== loggedUser.id) {
    if (loggedUser.role !== 'admin') return false;
  }
  return (
    <div className="opinion__buttons">
      {editMode ? (
        <>
          <Button
            iconType="confirm"
            iconFill="#167230"
            iconSize="18px"
            onClick={confirmOpinionChanges}
          />
          <Button
            iconType="exit"
            iconFill="#9f3e3e"
            iconSize="18px"
            onClick={cancelOpinionChanges}
          />
        </>
      ) : (
        <>
          <Button
            iconType="edit"
            iconFill="#7286d3"
            iconSize="18px"
            onClick={toggleEditMode}
          />
          <Button
            iconType="delete"
            iconFill="#9f3e3e"
            iconSize="18px"
            onClick={deleteOpinion}
          />
        </>
      )}
    </div>
  );
}
