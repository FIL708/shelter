import { useState } from 'react';
import { Button, Textarea } from '../../../../components/form';
import './new-opinion.css';

export default function NewOpinion({ createNewOpinion }) {
  const [newOpinion, setNewOpinion] = useState('');
  const newOpinionHandler = (event) => {
    const { value } = event.target;
    setNewOpinion(value);
  };

  return (
    <li className="new-opinion">
      <Textarea
        name="new-opinion"
        placeholder="Leave a good word about this pet"
        onChange={(event) => newOpinionHandler(event)}
        value={newOpinion}
      />
      <Button
        iconType="send"
        iconFill="#7286d3"
        iconSize="25px"
        disabled={!newOpinion}
        onClick={() => createNewOpinion(newOpinion)}
      />
    </li>
  );
}
