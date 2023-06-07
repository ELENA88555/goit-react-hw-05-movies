import { Link } from "react-router-dom";
import styled from "styled-components";


export const Wrapper = styled.ul`
  padding: 20px 0 20px;
  margin: 0px;
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  
`;

export const LinkNav = styled(Link)`
   padding: 0;
   text-decoration: none;
`;

export const Li = styled.li`
   padding: 2px 8px;

   &:hover {
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.5) 1px 2px 4px 3px;
  }
`;