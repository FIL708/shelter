import { Dropdown, Textfield, Button } from '../index.js';
import './users-filter.css';

export default function UsersFilter() {
  return (
    <form className="users-filter">
      <Dropdown />
      <Dropdown />
      <Textfield />
      <Dropdown />
      <Button />
    </form>
  );
}
