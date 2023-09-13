import { IconButton, Textarea } from 'components/form';
import './new-opinion.css';

export default function NewOpinion({
  createOpinion,
  newOpinion,
  newOpinionHandler,
  loggedUser,
}) {
  if (!loggedUser) return false;
  return (
    <li className="new-opinion">
      <Textarea
        name="new-opinion"
        placeholder="Leave a good word about this pet"
        onChange={(event) => newOpinionHandler(event)}
        value={newOpinion}
      />
      <IconButton
        type="send"
        colorl="#7286d3"
        size="25px"
        disabled={!newOpinion}
        onClick={() => createOpinion(newOpinion)}
      />
    </li>
  );
}
