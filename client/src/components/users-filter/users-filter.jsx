import { Dropdown, Textfield, Button } from '../index.js';
import './users-filter.css';

export default function UsersFilter({ onChange }) {
  return (
    <form className="users-filter">
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
      <Textfield />
      <Dropdown
        label="Search by"
        name="searchBy"
        values={['first name', 'last name', 'email']}
        onChange={(event) => onChange(event)}
      />
      <Button />
    </form>
  );
}
