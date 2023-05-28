import styled from "styled-components";
import { Link } from 'react-router-dom';


export const MainTitle = styled.h1`
font-size:15px;
font-weight: 600;
margin-top: 40px;
  margin-bottom: 0;


`;

export const MovieList = styled.ul`
  padding: 20px 0 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const LinkMovie = styled(Link)`
  text-decoration: none;
  padding: 2px 8px;

  &:hover {
    border-radius: 5px;
    box-shadow: 1px 2px 4px 3px rgba(0, 0, 0, 0.5);
  }
`;
