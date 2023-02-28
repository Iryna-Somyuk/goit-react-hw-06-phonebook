import { Formik } from 'formik';
import * as yup from 'yup';
import {
  FormContainer,
  Label,
  Input,
  ErrorMes,
  Btn,
} from './PhonebookForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { getContacts } from 'redux/selector';
import toast, { Toaster } from 'react-hot-toast';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const PhonebookForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    if (contacts.find(contact => contact.name === values.name)) {
      toast.error('Attention, this contact is already in the phonebook!', {
        duration: 4000,
      });
      return;
    }
    dispatch(addContact(values));

    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMes name="name" component="span" />
          </Label>
          <Label>
            Number{' '}
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMes name="number" component="span" />
          </Label>
          <Btn type="submit">Add contact</Btn>
        </FormContainer>
      </Formik>
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
};

// Ванільна форма
// export const PhonebookForm = ({ onSubmit }) => {
//   const handleSubmit = event => {
//     event.preventDefault();

//     const { name, number } = event.target.elements;
//     onSubmit(name.value, number.value);
//     name.value = '';
//     number.value = '';
//   };

//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <Label>
//         Name
//         <Input
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </Label>
//       <Label>
//         Number{' '}
//         <Input
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </Label>
//       <Btn type="submit">Add contact</Btn>
//     </FormContainer>
//   );
// };

// PhonebookForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// }
