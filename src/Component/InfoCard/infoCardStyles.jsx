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
