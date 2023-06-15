import { Link } from 'react-router-dom';
import { Icon } from '../../../../components/ui';
import { getFormattedDate } from '../../../../helpers';
import './users-table__record.css';

export default function UsersTableRecord({
  id,
  firstName,
  lastName,
  email,
  role,
  createdAt,
}) {
  const formattedDate = getFormattedDate(createdAt, 'full');
  return (
    <tr className="users-table__row">
      <td className="users-table__row-item">{id}</td>
      <td className="users-table__row-item">{firstName}</td>
      <td className="users-table__row-item">{lastName}</td>
      <td className="users-table__row-item">{email}</td>
      <td className="users-table__row-item">{role}</td>
      <td className="users-table__row-item">{formattedDate}</td>
      <td className="users-table__row-item">
        <Link to={`/users/${id}`} className="users-table__link">
          <Icon type="user-link" size="15px" fill="#fff2f2" />
        </Link>
      </td>
    </tr>
  );
}
