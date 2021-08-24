import styled from 'styled-components';

export const InfoCardContainer = styled.div`
  color:white;
  font-size: 3vw;
  border: 1px solid white;
  border-radius: 10px;
  margin:1vw;
  padding:1vw;
  height: 400px;
  overflow:hidden;
  justify-content: space-evenly;
`;

export const SmallContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color:black;
`;

export const Text = styled.div`
  width:200px;
  height: ${(props) => props.height}vw;
  font-size: ${(props) => props.fontSize}vw;
`;

export const Img = styled.img`
  width:200px;
  height: 200px;
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
