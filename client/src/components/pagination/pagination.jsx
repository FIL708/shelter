import getPages from '../../helpers/get-pages.js';
import { Button } from '../index.js';
import './pagination.css';

export default function Pagination({ page, pages, changePage }) {
  const visiblePages = getPages(page, pages);
  console.log(visiblePages);

  return (
    <nav className="pagination">
      {`page: ${page} pages: ${pages}`}
      <ul className="pagination__list">
        <li className="pagination__list-item">
          <Button
            text="<"
            onClick={() => {
              changePage(page - 1);
            }}
          />
        </li>
        <li className="pagination__list-item">
          <Button
            text="1"
            onClick={() => {
              changePage(1);
            }}
          />
        </li>
        <li className="pagination__list-item">
          <Button
            text="2"
            onClick={() => {
              changePage(2);
            }}
          />
        </li>
        <li className="pagination__list-item">
          <Button
            text="3"
            onClick={() => {
              changePage(3);
            }}
          />
        </li>
        <li className="pagination__list-item">
          <Button
            text="4"
            onClick={() => {
              changePage(4);
            }}
          />
        </li>
        <li className="pagination__list-item">
          <Button
            text="5"
            onClick={() => {
              changePage(5);
            }}
          />
        </li>
        <li className="pagination__list-item">
          <Button
            text="6"
            onClick={() => {
              changePage(5);
            }}
          />
        </li>
        <li className="pagination__list-item">
          <Button
            text="7"
            onClick={() => {
              changePage(5);
            }}
          />
        </li>
        <li className="pagination__list-item">
          <Button
            text=">"
            onClick={() => {
              changePage(page + 1);
            }}
          />
        </li>
      </ul>
    </nav>
  );
}
