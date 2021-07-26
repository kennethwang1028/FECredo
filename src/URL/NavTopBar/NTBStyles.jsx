import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NTBcontainer = styled.div`
  background: yellow;
  width: 96%;
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
  &.active {
    color: #E39774;
  }
`;

export const Icon = styled.img`
  font-color: white;
  width: 40px;
`;
