import { Dropdown, Textfield, IconButton } from 'components/form';
import './users-filter.css';

export default function UsersFilter({ changeFilter, cleanFilter, filter }) {
  return (
    <form className="users-filter">
      <fieldset className="users-filter__fieldset">
        <Dropdown
          label="Users per page"
          name="usersNumber"
          options={[10, 15, 20, 30, 40]}
          onChange={(event) => changeFilter(event)}
          value={filter.usersNumber}
        />
        <Dropdown
          label="Sort by"
          name="sortBy"
          options={['newest', 'oldest', 'role', 'A-Z', 'Z-A']}
          onChange={(event) => changeFilter(event)}
          value={filter.sortBy}
          placeholder="-"
        />
      </fieldset>
      <fieldset className="users-filter__fieldset">
        <Textfield
          name="search"
          label="Search"
          onChange={(event) => changeFilter(event)}
          value={filter.search}
        />
        <Dropdown
          label="Search by"
          name="searchBy"
          options={['first name', 'last name', 'email']}
          onChange={(event) => changeFilter(event)}
          value={filter.searchBy}
        />
        <IconButton
          onClick={cleanFilter}
          type="clear"
          background="primary"
          className="users-filter__clear-button"
        />
      </fieldset>
    </form>
  );
}
