
import { Contact } from '../Contact/Contact';
import { ListContacts } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selector';

export const ContactsList = () => {
  const contacts = useSelector(getFilteredContacts);
  return (
    <ListContacts>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact}/>
      ))}
    </ListContacts>
  );
};

