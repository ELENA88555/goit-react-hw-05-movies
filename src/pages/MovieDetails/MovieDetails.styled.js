import styled from 'styled-components';
import { Link} from "react-router-dom";

export const Title = styled.h2`
  font-size: 15px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 0;
`;

export const ButtonBack = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  margin-bottom: 10px;
  font-weight: 500;
  background-color: transparent;

`;

export const LinkBack = styled(Link)`
display: flex;
align-items: center;
text-align: center;
text-decoration: none;
color: black;
gap: 10px;

&:hover {
    color: orangered;

  }

`;

export const MoviePoster = styled.div`
display: block;

`;