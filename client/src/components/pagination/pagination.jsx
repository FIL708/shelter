import { Button } from '../index.js';
import './pagination.css';

export default function Pagination() {
  return (
    <nav className="pagination">
      <ul className="pagination__list">
        <li className="pagination__list-item">
          <Button text="<" />
        </li>
        <li className="pagination__list-item">
          <Button text="1" />
        </li>
        <li className="pagination__list-item">
          <Button text="2" />
        </li>
        <li className="pagination__list-item">
          <Button text="3" />
        </li>
        <li className="pagination__list-item">
          <Button text="4" />
        </li>
        <li className="pagination__list-item">
          <Button text="5" />
        </li>
        <li className="pagination__list-item">
          <Button text=">" />
        </li>
      </ul>
    </nav>
  );
}
