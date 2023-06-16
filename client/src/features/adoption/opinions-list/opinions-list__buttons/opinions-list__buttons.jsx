import { useContext } from 'react';
import { Button } from '../../../../components/form';
import { UserContext } from '../../../..';
import './opinions-list__button.css';

export default function OpinionsListItemButtons({
  updateOpinion,
  deleteOpinion,
  opinionId,
  opinionAuthorId,
}) {
  const { user } = useContext(UserContext);
  console.log(opinionId);
  if (!user) return false;
  if (opinionAuthorId !== user.id) {
    if (user.role !== 'admin') return false;
  }
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
