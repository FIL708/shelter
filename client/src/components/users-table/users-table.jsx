import UsersTableRecord from './users-table__record/users-table__record';
import './users-table.css';

export default function UsersTable() {
  return (
    <table className="users-table">
      <thead>
        <tr className="users-table__row">
          <th className="users-table__header">ID</th>
          <th className="users-table__header">First Name</th>
          <th className="users-table__header">Last Name</th>
          <th className="users-table__header">Email</th>
          <th className="users-table__header">Role</th>
          <th className="users-table__header">Created at</th>
          <th className="users-table__table__header">Details</th>
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
