import { UsersFilter } from '../index.js';
import UsersTableRecord from './users-table__record/users-table__record.jsx';
import './users-table.css';

export default function UsersTable({ users }) {
  return (
    <section className="users-table__section">
      <UsersFilter />
      <table className="users-table">
        <thead className="users-table__header">
          <tr className="users-table__header-row">
            <th className="users-table__header-item">ID</th>
            <th className="users-table__header-item">First Name</th>
            <th className="users-table__header-item">Last Name</th>
            <th className="users-table__header-item">Email</th>
            <th className="users-table__header-item">Role</th>
            <th className="users-table__header-item">Created at</th>
            <th className="users-table__header-item">Details</th>
          </tr>
        </thead>
        <tbody className="users-table__body">
          {users.map((user) => (
            <UsersTableRecord key={user.id} {...user} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
