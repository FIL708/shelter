import getPages from '../../helpers/get-pages.js';
import { Button } from '../index.js';
import './pagination.css';

export default function Pagination({ page, pages, changePage }) {
  const visiblePages = getPages(page, pages);

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
        {visiblePages.map((pageItem) => (
          <Button
            text={pageItem.value}
            key={pageItem.value}
            className={pageItem.current ? 'pagination__active-button' : null}
            onClick={() => changePage(pageItem.value)}
          />
        ))}
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
