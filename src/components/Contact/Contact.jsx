import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ContactItem, ContactInfo, DeleteBtn } from './Contact.styled';
import { deleteContact } from 'redux/contactSlice';

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => dispatch(deleteContact(id));

  return (
    <ContactItem>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <DeleteBtn onClick={handleDeleteContact}>Delete</DeleteBtn>
    </ContactItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
