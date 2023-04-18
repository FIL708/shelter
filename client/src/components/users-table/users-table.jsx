import UsersTableRecord from './users-table__record/users-table__record';
import './users-table.css';

export default function UsersTable() {
  return (
    <table className="users-table">
      <thead className="users-table__header">
        <tr className="users-table__header-row">
          <th className="users-table__item">ID</th>
          <th className="users-table__item">First Name</th>
          <th className="users-table__item">Last Name</th>
          <th className="users-table__item">Email</th>
          <th className="users-table__item">Role</th>
          <th className="users-table__item">Created at</th>
          <th className="users-table__item">Details</th>
        </tr>
      </thead>
      <tbody className="users-table__body">
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
