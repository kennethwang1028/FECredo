import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NTBcontainer = styled.div`
  background: #edf2f5;
  width: 96%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2%;
  padding-left: 2%;
`;

export const NavLink = styled(Link)`
  color: #095256;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none !important;
  backgroud-color:white;
  &.active {
    color: #E39774;
  }
`;

export const Icon = styled.img`
  backgroud-color:white;
  height: 40%;
  border: 2px solid black;
  border-radius : 10px;
  padding: 3px;
  margin-right: 5px;
  margin-left: 5px;
`;
