import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const AppContainer = styled.div`
  margin: -8px;
  font-size: 16px;
  background-color:black;
  overflow:auto;
  position:relative;
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const SideBarContainer = styled.div`
  background: #edf2f5;
  width: ${(props) => (props.width)}px;
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 1vw;
  padding-left: 1vw;
  left:0;
  position: fixed;
  overflow:hidden;
`;

export const TopBarContainer = styled.div`
  background: #edf2f5;
  width: ${(props) => (props.width - 15)}px;
  height: 10vw;
  max-height: 85px;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top:0;
  position: relative;
  padding-right: 1vw;
  overflow:hidden;
`;

export const RoutesContainer = styled.div`
  background: #edf2f5;
  width: ${(props) => (props.width - 15)}px;
  display: flex;
  align-items: center;
  position: relative;
  padding-right: 1vw;
  // overflow:hidden;
`;

export const NavLink = styled(Link)`
  display: flex;
  font-size:4vw;
  align-items: center;
  cursor: pointer;
  margin-top: 0.5vw;
  margin-bottom: 0.5vw;
  text-decoration: none !important;
`;

export const NavIcon = styled.img`
  width: 6vw;
  height: auto;
  max-width: 50px;
  min-width: 30px;
  border: 2px solid black;
  border-radius : 5px;
  padding: 5px;
  &:hover {
    background-color:#a5aaad;
    border-radius: 1vw;
  }
`;

export const NavText = styled.div`
  margin-left:1vw;
  color:black;
  text-decoration: black wavy underline;
  &:hover {
    background-color:#a5aaad;
    border-radius: 1vw;
  }
  &:active {
    color:white;
  }
`;

export const NavInputText = styled.input`
  width: 15vw;
  height: 6vw;
  max-height: 50px;
  font-size:4vw;
`;

export const Select = styled.select`
  width: 15vw;
  height: 6vw;
  max-height: 70px;
  font-size:3vw;
  margin-top:1vw;
  margin-left: 0.5vw;
  border:none;
  background: #edf2f5;

  option {

  }
`;
