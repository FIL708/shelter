export default function UsersTableRecord({
  id,
  firstName,
  lastName,
  email,
  role,
  createdAt,
}) {
  console.log(id, firstName, lastName, email, role, createdAt);

  return (
    <tr className="users-table__row">
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>{createdAt}</td>
    </tr>
  );
}
