import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import {
  selectContacts,
  selectLoading,
  selectError,
} from '../../redux/contacts/selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import { selectNameFilter } from '../../redux/filters/selectors';
import s from './ContactsPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const filter = useSelector(selectNameFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !isError && <Loader />}
      {isError && <Error>Error</Error>}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}
