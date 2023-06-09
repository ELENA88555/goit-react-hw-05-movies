import styled from "styled-components";

export const FormSearch = styled.form`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;

  padding: 0 10px 0 10px;
  margin-right: 15px;

  border: 1px solid black;
  outline: none;
  border-radius: 5px;

  :hover {
   border: 1px solid orangered;
  }
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
  border: 1px solid black;

  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;


  :hover {
   border: 1px solid orangered;
  
  }`