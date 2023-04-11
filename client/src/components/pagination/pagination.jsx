import { Button } from '../index.js';
import './pagination.css';

export default function Pagination() {
  return (
    <nav className="pagination">
      <ul className="pagination__buttons-list">
        <li>
          <Button text="<" />
        </li>
        <li>
          <Button text="1" />
        </li>
        <li>
          <Button text="2" />
        </li>
        <li>
          <Button text="3" />
        </li>
        <li>
          <Button text="4" />
        </li>
        <li>
          <Button text="5" />
        </li>
        <li>
          <Button text=">" />
        </li>
      </ul>
    </nav>
  );
}
