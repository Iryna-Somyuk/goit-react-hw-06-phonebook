
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Section } from './SectionTitle/SectionTitle';
import { Сontainer } from './App.styled';


export const App = () => {

  return (
    <Сontainer>
      <Section title="Phonebook">
        <PhonebookForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList/>
      </Section>
    </Сontainer>
  );
};


