import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:white;
  padding:2vw 4vw;
  position:relative;
`;

export const ProductDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:white;
  position:relative;
`;

export const ProductImageContainer = styled.div`
  width:50vw;
  min-width: 400px;
  height:30vw;
  min-height:300px;
  display: flex;
  background-color:black;
  border:1px solid black;
  border-radius:20px;
  position: relative;
`;

export const ProductMainImageContainer = styled.div`
  width:22vw;
  min-width: 160px;
  height:30vw;
  min-height:300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:black;
  overflow:auto;
  top:0;
`;

export const ProductSmallImageContainer = styled.div`
  width:7vw;
  min-width:60px;
  display: flex;
  flex-direction:column;
  justify-content: space-evenly;
  align-items: center;
  color:white;
  font-size:1.5vw;
`;

export const ProductSmallImageButton = styled.button`
  width:5vw;
  min-width:50px;
  height:5vw;
  min-height:50px;
  background-image:url(${(props) => props.src});
  background-size:cover;
  border-radius:10px;
  ${(props) => (props.isSeleced ? 'border:2px solid red;' : null)}
  &: active {
    border:2px solid red;
  }
`;

export const ProductImageButton = styled.button`
  width:5vw;
  min-width:50px;
  min-height: 50px;
  background-color: Transparent;
  border-radius:10px;
  margin: 1vw;
  font-size:2vw;
  color: white;
  &: active {
    border:2px solid red;
  }
`;
