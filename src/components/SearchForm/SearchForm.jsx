import { HiOutlineSearchCircle } from 'react-icons/hi';
import Box from 'components/Box';
import { InputField, FindBtn } from './SearchForm.styled';

const SearchForm = ({ setSearchParams }) => {
  const formSubmithandler = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value.trim() });
    form.reset();
  };

  return (
    <form onSubmit={formSubmithandler}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <InputField type="text" name="query" placeholder="Please type here" />
        <FindBtn type="submit">
          <HiOutlineSearchCircle size={40} />
        </FindBtn>
      </Box>
    </form>
  );
};

export default SearchForm;
