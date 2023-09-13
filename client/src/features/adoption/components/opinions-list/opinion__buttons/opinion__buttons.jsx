import { IconButton } from 'components/form';
import './opinion__buttons.css';

export default function OpinionButtons({
  deleteOpinion,
  toggleEditMode,
  opinionAuthorId,
  editMode,
  loggedUser,
  confirmChanges,
  cancelOpinionChanges,
}) {
  if (!loggedUser) return false;
  if (opinionAuthorId !== loggedUser.id) {
    if (loggedUser.role !== 'admin') return false;
  }
  return (
    <div className="opinion__buttons">
      {editMode ? (
        <>
          <IconButton
            type="confirm"
            color="#167230"
            size="18px"
            onClick={confirmChanges}
          />
          <IconButton
            type="exit"
            color="#9f3e3e"
            size="18px"
            onClick={cancelOpinionChanges}
          />
        </>
      ) : (
        <>
          <IconButton type="edit" size="18px" onClick={toggleEditMode} />
          <IconButton
            type="delete"
            color="#9f3e3e"
            size="18px"
            onClick={deleteOpinion}
          />
        </>
      )}
    </div>
  );
}
