
import { ButtonSubmit, FormSearch, Input } from './SearchBar.styled';
import { useState } from 'react';

const SearchBar = ({handleSubmitForm}) => {

  const [value, setValue] = useState('');

  const handleChangetForm = (event)=> {
    const inputValue = event.currentTarget.value
     if (inputValue.trim() ==="") {
       return console.log('NO RESULTS');
     } setValue( inputValue);
 
   };


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
