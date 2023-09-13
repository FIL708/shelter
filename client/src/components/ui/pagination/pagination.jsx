import { Button } from 'components/form';
import getPages from './get-pages.js';
import './pagination.css';

export default function Pagination({ page, pages, changePage }) {
  const visiblePages = getPages(page, pages);

  if (!pages) return false;

  return (
    <nav className="pagination">
      <ul className="pagination__list">
        <li className="pagination__list-item">
          <Button
            onClick={() => {
              changePage(page - 1);
            }}
          >
            {'<'}
          </Button>
        </li>
        {visiblePages.map((pageItem) => (
          <Button
            key={pageItem.value}
            className={pageItem.current ? 'pagination__active-button' : null}
            onClick={() => changePage(pageItem.value)}
          >
            {pageItem.value}
          </Button>
        ))}
        <li className="pagination__list-item">
          <Button
            text=">"
            onClick={() => {
              changePage(page + 1);
            }}
          >
            {'>'}
          </Button>
        </li>
      </ul>
    </nav>
  );
}
