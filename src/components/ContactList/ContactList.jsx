import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contacts/selectors.js';
import { selectNameFilter } from '../../redux/filters/selectors.js';
import s from './ContactList.module.css';

const ContactList = () => {
  const filteredUserData = useSelector(selectFilteredContacts);
  const filter = useSelector(selectNameFilter);

  return (
    <>
      {filteredUserData.length === 0 && filter ? (
        <h2>We couldn't find any {filter}</h2>
      ) : (
        <ul className={s.list}>
          {filteredUserData.map(user => (
            <Contact key={user.id} user={user} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
