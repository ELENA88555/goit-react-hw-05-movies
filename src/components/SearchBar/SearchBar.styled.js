import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 200px;
  height: 30px;

  padding: 0 10px 0 10px;
  margin-right: 15px;

  border: 1px solid black;
  outline: none;

`;


export const ButtonSubmit = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 30px;
  margin-bottom: 30px;

  font-size: 15px;
  font-family: inherit;

  background-color: blue;
  color: black;
  border: none;

  cursor: pointer;


  :hover {
    background-color: red;
    color: white;
  }`