import UsersTableRecord from './users-table__record';
import './users-table.css';

export default function UsersTable() {
  return (
    <table className="users-table">
      <tr className="users-table__row">
        <th className="users-table__row">ID</th>
        <th className="users-table__row">First Name</th>
        <th className="users-table__row">Last Name</th>
        <th className="users-table__row">Email</th>
        <th className="users-table__row">Role</th>
        <th className="users-table__row">Created at</th>
        <th className="users-table__row">Details</th>
      </tr>
      <UsersTableRecord />
    </table>
  );
}
