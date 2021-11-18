import styled from 'styled-components';
import { Link } from 'react-router-dom';

// LogInContainerStyle;
export const FeverContainerStyle = styled.div`
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

export const FeverStyle = styled.div`
  display: flex;
  min-width: 360px;
  flex-direction: column;
  justify-content: flex-start;
  width:  ${(props) => props.width}px;
`;

// SignUpButtonStyle;
export const LogInButtonStyle = styled(Link)`
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

// LogInTextStyle
export const LogInTextStyle = styled.div`
  font-size:24px;
  color: #9399a3;
`;

export const CategorySelectStyle = styled.select`
  font-size: 3vw;
  display: flex;
`;

export const RowContainer = styled.div`
  display: flex;
  width:  ${(props) => props.width}px;
  min-width: 390px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FeverButton = styled.button`
  width: 45px;
  height: 60px;
  border-radius:10px;
  font-size:16px;
`;

export const FeverDeleteButton = styled.button`
  width: 30px;
  height: 30px;
  clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
  background-color: red;
  color: red;
  &:hover{
    background-color: Crimson;
  }
  &:active{
    background-color: darkred;
  }
`;

export const FeverDeleteContainer = styled.div`
  display:flex;
  justify-content:flex-end;
  padding:3px;
`;

export const FeverItemDeletedButton = styled(FeverDeleteButton)`
  width: 15px;
  height: 15px;
  margin-bottom: -10px;
  `;

export const FeverItemContainer = styled.div`
  display:flex;
  flex-direction: column;
  align-items: flex-end;
`;
