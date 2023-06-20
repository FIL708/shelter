import { Button, Textarea } from '../../../../components/form';
import './new-opinion.css';

export default function NewOpinion() {
  return (
    <li className="new-opinion">
      <Textarea
        name="new-opinion"
        placeholder="Leave a good word about this pet"
      />
      <Button iconType="send" iconFill="#7286d3" iconSize="25px" />
    </li>
  );
}
