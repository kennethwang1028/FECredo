import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:white;
  width:  ${(props) => (props.width - 15)}px;
  overflow:auto;
  position:relative;
`;

export const SignInContainer = styled.div`
  display: flex;
  width:300px;
  height: 250px;
  flex-direction: column;
  border: 3px solid #9399a3;
  justify-content: space-between;
  border-radius: 5px;
  padding: 15px;
  font-size: 2vw;
  color: black;
  white-space: initial;
  margin: 20px;
`;

export const SignInText = styled.div`
  font-size:24px;
`;

export const SignInInput = styled.input`
  width:290px;
  border: 1px solid ${(props) => (props.warning ? 'red' : 'black')};
  border-radius: 3px;
  font-size:24px;
`;

export const SignInButton = styled.button`
  height: 36px;
  font-size:24px;
  color:#9399a3;
`;

export const LogInText = styled.div`
  font-size:24px;
  color: #9399a3;
`;

export const LogInButton = styled.button`
  width:300px;
  height: 36px;
  font-size:24px;
  color:#9399a3;
  border: 3px solid #9399a3;
  border-radius:3px;
  margin: 15px;
  &:active{
    color:white
  }
`;

export const SignUpButton = styled(Link)`
  width:300px;
  height: 36px;
  font-size:24px;
  display:flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color:#9399a3;
  border: 3px solid #9399a3;
  border-radius:3px;
  margin: 15px;
  &:active{
    color:white
  }
`;

export const WarningText = styled.div`
  color: red;
`;
