import UsersTableRecord from './users-table__record';
import './users-table.css';

export default function UsersTable() {
  return (
    <table className="users-table">
      <thead>
        <tr className="users-table__row">
          <th className="users-table__row">ID</th>
          <th className="users-table__row">First Name</th>
          <th className="users-table__row">Last Name</th>
          <th className="users-table__row">Email</th>
          <th className="users-table__row">Role</th>
          <th className="users-table__row">Created at</th>
          <th className="users-table__row">Details</th>
        </tr>
      </thead>
      <tbody>
        <UsersTableRecord
          {...{
            id: '1',
            firstName: 'Joe',
            lastName: 'Doe',
            email: 'joedoe@example.com',
            role: 'user',
            createdAt: '2023-03-28 07:19:53.602 +00:00',
          }}
        />
      </tbody>
    </table>
  );
}
