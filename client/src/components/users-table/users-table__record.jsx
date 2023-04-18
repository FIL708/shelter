import { getFormattedDate } from '../../helpers';

export default function UsersTableRecord({
  id,
  firstName,
  lastName,
  email,
  role,
  createdAt,
}) {
  const formattedDate = getFormattedDate(createdAt);
  return (
    <tr className="users-table__row">
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>{formattedDate}</td>
    </tr>
  );
}
