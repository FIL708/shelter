import { Dropdown, Textfield, Button } from '../index.js';
import './users-filter.css';

export default function UsersFilter({ onChange, onClick }) {
  return (
    <form className="users-filter">
      <fieldset className="users-filter__fieldset">
        <Dropdown
          label="Users per page"
          name="usersNumber"
          values={[10, 15, 20, 30, 40]}
          onChange={(event) => onChange(event)}
        />
        <Dropdown
          label="Sort by"
          name="sortBy"
          values={['newest', 'oldest', 'role', 'A-Z', 'Z-A']}
          onChange={(event) => onChange(event)}
        />
      </fieldset>
      <fieldset className="users-filter__fieldset">
        <Textfield
          name="search"
          label="Search"
          onChange={(event) => onChange(event)}
        />
        <Dropdown
          label="Search by"
          name="searchBy"
          values={['first name', 'last name', 'email']}
          onChange={(event) => onChange(event)}
        />
        <Button
          onClick={onClick}
          iconType="clear"
          iconSize="20px"
          className="users-filter__clear-button"
        />
      </fieldset>
    </form>
  );
}
