import { Form, useNavigate } from "react-router-dom"
import { ButtonSubmit, Input } from "./SearchBar.styled"


const SearchBar = () => {
  const navigate = useNavigate()

const handleSubmitForm = (event) => {
  event.preventDefault()

}


  return (
    <div>
    <Form onSubmit={handleSubmitForm}>
      <Input type="text" name="query" />
    </Form>
    <ButtonSubmit type="submit">

    </ButtonSubmit>
    </div>

  )
}

export default SearchBar