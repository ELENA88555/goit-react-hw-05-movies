import { ButtonSubmit, FormSearch, Input } from './SearchBar.styled';

const SearchBar = ({ query, onSubmit }) => {
  return (
    <div>
      <FormSearch onSubmit={onSubmit}>
        <Input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          value={query}
          // onChange={e => onChange(e.target.value)}
        />
        <ButtonSubmit type="submit">Search</ButtonSubmit>
      </FormSearch>
    </div>
  );
};

export default SearchBar;
