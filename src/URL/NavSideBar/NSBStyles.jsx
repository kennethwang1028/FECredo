import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NSBcontainer = styled.div`
  background: #edf2f5;
  width: 60px;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-top: 15px;
  padding-right: 5px;
  padding-left: 5px;
  position: fixed;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration: none !important;
`;

export const Icon = styled.img`
  width: 50%;
  border: 2px solid black;
  border-radius : 10px;
  padding: 3px;
  margin-right: 5px;
  margin-left: 10px;
  &:hover {
    background-color:#a5aaad;
    border-radius: 5px;
  }
`;
