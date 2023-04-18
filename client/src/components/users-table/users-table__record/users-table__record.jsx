import { Link } from 'react-router-dom';
import { getFormattedDate } from '../../../helpers';
import { Icon } from '../../index.js';
import './users-table__record.css';

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
      <td>
        <Link to={`/users/${id}`} className="users-table__link ">
          <Icon type="user-link" size="15px" fill="#fff2f2" />
        </Link>
      </td>
    </tr>
  );
}
