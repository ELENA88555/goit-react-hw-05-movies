// import { useState } from 'react';
import { ButtonSubmit, FormSearch, Input } from './SearchBar.styled';

const SearchBar = ({handleSubmitForm, handleChangetForm, value}) => {

  // const [query, setQuery] = useState('');

  // const handleChangetForm = (event)=> {
  //   const inputValue = event.currentTarget.value
  //    if (inputValue ==="") {
  //      return console.log('NO RESULTS');
  //    } setQuery( inputValue);
 
  //  };


  return (
    <div>
      <FormSearch onSubmit={handleSubmitForm}>
        <Input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          value={value}
          onChange={handleChangetForm }
        />
        <ButtonSubmit type="submit">Search</ButtonSubmit>
      </FormSearch>
    </div>
  );
};

export default SearchBar;
