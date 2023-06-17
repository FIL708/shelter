import OpinionsListItem from './opinions-list__item/opinions-list__item.jsx';
import './opinions-list.css';

export default function OpinionsList({ opinions }) {
  if (!opinions) return false;
  return (
    <ul className="opinions-list">
      {opinions.map((opinion) => (
        <OpinionsListItem key={opinion.id} {...opinion} />
      ))}
    </ul>
  );
}
