
import { ButtonSubmit, FormSearch, Input } from "./SearchBar.styled"


const SearchBar = () => {
  // const navigate = useNavigate()

const handleSubmitForm = (event) => {
  event.preventDefault()

}


  return (
    <div>
    <FormSearch onSubmit={handleSubmitForm}>
      <Input type="text" name="query" />
      <ButtonSubmit type="submit">
    Search
    </ButtonSubmit>
    </FormSearch>

    </div>

  )
}

export default SearchBar