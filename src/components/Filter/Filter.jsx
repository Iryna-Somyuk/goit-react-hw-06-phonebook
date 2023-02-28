
import { FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selector';

export const Filter = () => {

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleChange = ev => {
    dispatch(setFilter(ev.target.value));
  }
  
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="name"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
    </FilterLabel>
  );
};

