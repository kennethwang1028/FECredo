import styled from 'styled-components';

export const ContainerStyle = styled.div`
  width:${(props) => props.width}px;
  min-width: 400px;
`;

export const ColumnContianerStyle = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  height: 100px;
  min-width: 90px;
  width: 25vw;
  padding: 10px;
  overflow: hidden;
`;

export const PopOutContianerStyle = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items: center;
  min-width: 240px;
  width: 60vw;
  height: 70vh;
  padding: 10px;
  overflow: auto;
  position:fixed;
  top: 15vh;
  left: 20vw;
  background-color: white;
  border: 5px solid black;
`;

export const ColumnContianerLeftStyle = styled(ColumnContianerStyle)`
  align-items:flex-start;
  padding-Left: 15px;
`;

export const ColumnContianerRightStyle = styled(ColumnContianerStyle)`
  align-items:flex-end;
  padding-right: 15px;
`;

export const ShopItemStyle = styled.div`
  height: 100px;
  min-width: 400px;
  font-size: 18px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items: center;
  margin: 5px;
  border: 1px solid black;
  overflow: hidden;
`;

export const ShopItemImgStyle = styled.button`
  height: 90px;
  width: 90px;
  overflow: hidden;
  display:flex;
  justify-content:center;
  align-items: center;
`;

export const ShopItemTextStyle = styled.div`
  margin: 10px;
  font-size:20px;
`;
/// LogInButtonStyle
export const CheckOutButtonStyle = styled.button`
  float: right;
  margin-right: 10px;
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

export const DivStyle = styled.div`
  width: 307px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${(props) => (props.isWarning
    ? `
    color: red;
    border: 1px solid red;
    ` : 'color: black;')}
  padding: 2px;
  `;

// FeverDeleteButton
export const DeleteButtonStyle = styled.button`
  margin-left: 50vw;
  min-width: 30px;
  min-height: 30px;
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

export const ItemInfoStyle = styled.div`
  display:flex;
  flex-direction:column;

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

export const ColumnButtonStyle = styled.button`
  min-width:180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding: 3px;
  border-radius:5px;
`;

export const OrderTextStyle = styled.div`
  margin: 10px;
  font-size:16px;
`;
