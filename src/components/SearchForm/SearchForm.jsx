import { HiOutlineSearchCircle } from 'react-icons/hi';
import Box from 'components/Box';
import { InputField, FindBtn } from './SearchForm.styled';

const SearchForm = ({ setQuery }) => {
  const formSubmithandler = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setQuery(form.elements.searchField.value);
    form.reset();
  };

  return (
    <form onSubmit={formSubmithandler}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <InputField
          type="text"
          name="searchField"
          placeholder="Please type here"
        />
        <FindBtn type="submit">
          <HiOutlineSearchCircle size={40} />
        </FindBtn>
      </Box>
    </form>
  );
};

export default SearchForm;
