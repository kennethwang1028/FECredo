import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogInContainerStyle = styled.div`
  display: flex;
  min-width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:white;
  width:  ${(props) => props.width}px;
  overflow:auto;
  position:relative;
`;

export const SignInContainerStyle = styled.div`
  display: flex;
  width:300px;
  flex-direction: column;
  border: 3px solid #9399a3;
  justify-content: space-between;
  border-radius: 5px;
  padding: 15px;
  font-size: 16px;
  color: black;
  white-space: initial;
  margin: 20px;
`;

export const SignInTextStyle = styled.div`
  font-size:24px;
  overflow: auto;
`;

export const SignInInput = styled.input`
  width:290px;
  border: 1px solid ${(props) => (props.warning ? 'red' : 'black')};
  border-radius: 3px;
  font-size:24px;
`;

export const SignInButtonStyle = styled.button`
  height: 36px;
  font-size:24px;
  color:#9399a3;
`;

export const LogInTextStyle = styled.div`
  font-size:24px;
  color: #9399a3;
`;

export const LogInButtonStyle = styled.button`
  width:307px;
  height: 36px;
  font-size:24px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color:#9399a3;
  border: 3px solid #9399a3;
  margin-top:10px;
  border-radius:3px;
  &:active{
    color:white
  }
`;

export const SignUpButtonStyle = styled(Link)`
  width:300px;
  height: 36px;
  font-size:24px;
  display:flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color:#9399a3;
  border: 3px solid #9399a3;
  margin-top:10px;
  border-radius:3px;
  &:active{
    color:white
  }
`;

export const WarningText = styled.div`
  color: red;
`;

export const SwitcherStyle = styled.button`
  background-color: ${
  (props) => (props.userType === 'user'
    ? 'white' : '#9399a3')
};
  width:2vw;
  min-widht:16px;
  height:2vw;
  min-height:16px;
  border-radius:5px;
`;

export const RowStyle = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
`;

export const EditButtonStyle = styled.button`
  height: 20px;
  font-size:16px;
  color:#9399a3;
  border: 1px solid #9399a3;
  border-radius:5px;
  &:active{
    background-color:white
  }
`;
