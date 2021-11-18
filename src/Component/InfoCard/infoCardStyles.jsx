import styled from 'styled-components';

export const InfoCardContainerStyle = styled.button`
  width:200px;
  height:380px;
  padding: 5px;
  border-radius:10px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;
  overflow:hidden;
`;

export const SmallContainerStyle = styled.div`
  width:180px;
  display:flex;
  flex-direction:column;
  align-items: center;
  height:${(props) => props.height}px;
  background-color: white;
`;

export const ContainerStyle = styled.button`
  width:${(props) => props.width}px;
  min-width:400px;
  padding:5px;
  margin:5px;
  border-radius:10px;
`;

export const ColumnContainerStyle = styled.div`
  width:${(props) => props.width}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RowContainerStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color:white;
  border-radius:10px;

`;

export const ImgStyle = styled.img`
  width:150px;
  height: 150px;
  border-radius:10px;
  border: 2px solid black;
  &:hover {
    width:250px;
    height: 250px;
  }
`;

export const TextStyle = styled.p`
  font-size: ${(props) => props.fontSize}px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin:0px;
  margin-top:5px;
  &:hover {
    -webkit-line-clamp: 10;
  }
`;

export const Img70Style = styled.img`
  border-radius:5px;
  border: 1px solid black;
`;

export const Text70Style = styled.p`
  font-size: 16px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  margin:0px;
  margin-top:5px;
`;

export const ColumnButtonStyle = styled.button`
  width:${(props) => props.width}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  padding: 3px;
  border-radius:5px;
`;
