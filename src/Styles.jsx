import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const AppContainerStyle = styled.div`
  // margin: -8px;
  // font-size: 16px;
  // background-color:black;
  // overflow:auto;
  // position:relative;
  // display:flex;
  // flex-direction: row;
  // justify-content: flex-end;
  background-color:yellow;
  width:100vw;
  margin:-8px;
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const NavSideBarContainerStyle = styled.div`
  background: #edf2f5;
  width: ${(props) => (props.width)}px;
  height:100vh;
  position:fixed;
  display:flex;
  justify-content: space-evenly;
  left:0;
`;

export const NavInfoContainerStyle = styled.div`
  background: red;
  width: ${(props) => (props.width)}px;
  min-width: 400px;
  display:flex;
  flex-direction:column;
`;

export const SideBarListContainerStyle = styled.div`
  height: 10vw;
  max-height: 85px;
  min-height: 60px;
  display:flex;
  align-items: center;
  ${(props) => (props.isSideBarClicked
    ? null
    : `
    justify-content: center;
    `)}
`;

export const TopBarContainerStyle = styled.div`
  background: #edf2f5;
  min-width: 400px;
  height: 10vw;
  max-height: 85px;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top:0;
  position: relative;
  padding-right: 2vw;
`;

export const RoutesContainerStyle = styled.div`
`;

export const NavLinkStyle = styled(Link)`
  display: flex;
  font-size:4vw;
  align-items: center;
  cursor: pointer;
  margin-top: 0.5vw;
  margin-bottom: 0.5vw;
  text-decoration: none !important;
`;

export const NavIconStyle = styled.img`
  border: 2px solid black;
  border-radius : 5px;
  padding: 5px;
  &:hover {
    background-color:#a5aaad;
    border-radius: 1vw;
  }
`;

export const NavTextStyle = styled.div`
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
