import { useContext } from 'react';
import { Button } from '../../../../components/form';
import { UserContext } from '../../../..';
import './opinions-list__button.css';

export default function OpinionsListItemButtons({
  updateOpinion,
  deleteOpinion,
}) {
  const { user } = useContext(UserContext);
  console.log(user);
  if (!user) return false;

  return (
    <div className="opinions-list__buttons">
      <Button
        iconType="edit"
        iconFill="#7286d3"
        iconSize="18px"
        onClick={updateOpinion}
      />
      <Button
        iconType="exit"
        iconFill="#9f3e3e"
        iconSize="18px"
        onClick={deleteOpinion}
      />
    </div>
  );
}
