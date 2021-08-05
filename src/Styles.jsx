import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const AppContainer = styled.div`
  margin: -8px;
  font-size: 4vw;
  background-color:black;
  min-width: 500px;
  overflow:auto;
`;

export const SideBarContainer = styled.div`
  background: #edf2f5;
  width: ${(props) => (props.isIconListClicked ? '30vw' : '10vw')};
  max-width:${(props) => (props.isIconListClicked ? '30vw' : '80px')};
  min-width: ${(props) => (props.isIconListClicked ? '100px' : '50px')};
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 1vw;
  padding-left: 1vw;
  position: fixed;
`;

export const TopBarContainer = styled.div`
  background: #edf2f5;
  height: 10vw;
  max-height: 85px;
  min-height: 50px;
  display: flex;
  padding-left:${(props) => {
    if (props.width < 500) {
      return '50px;';
    } if (props.isIconListClicked) {
      return '31vw;';
    }
    return '11vw;';
  }}
  justify-content: space-between;
  padding-right: 2vw;
  align-items: center;
`;

export const RoutesContainer = styled.div`
  background: red;
  display: flex;
  padding-left:${(props) => {
    if (props.width < 500) {
      return '50px;';
    } if (props.width >= 500 && props.width <= 800) {
      return '11vw;';
    }
    if (props.isIconListClicked) {
      return '31vw;';
    }
    return '7vw;';
  }}
  justify-content: space-between;
  padding-right: 2vw;
  align-items: center;
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
