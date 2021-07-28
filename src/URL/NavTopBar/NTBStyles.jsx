import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NTBcontainer = styled.div`
  background: #edf2f5;
  height: 60px;
  display: flex;
  padding-left:220px;
  justify-content: flex-end;
  align-items: center;
`;

export const NTBSection = styled.div`
  width: 96%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none !important;
  backgroud-color:white;
`;

export const Icon = styled.img`
  backgroud-color:white;
  height: 50%;
  border: 2px solid black;
  border-radius : 10px;
  padding: 3px;
  margin-right: 5px;
  margin-left: 5px;
  &:hover {
    background-color:#a5aaad;
    border-radius: 5px;
  }
`;

export const InputText = styled.input`
  width: 40%;
  min-width: 80px;
`;
