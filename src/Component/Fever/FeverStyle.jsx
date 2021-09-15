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