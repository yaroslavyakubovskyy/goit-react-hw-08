import { User, Phone } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import s from './Contact.module.css';

const Contact = ({ user }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const { id, name, number } = user;

  return (
    <li className={s.item}>
      <div>
        <span>
          <User size={18} />
          {name}
        </span>
        <span>
          <Phone size={18} />
          {number}
        </span>
      </div>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
