import styled from 'styled-components';

export const Container = styled.div`
  width:  ${(props) => (props.width - 15)}px;
  overflow:auto;
  position:relative;
`;

export const ProductDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.isRow ? 'row' : 'column')};
  justify-content: center;
  align-items: center;
  background-color:black;
  padding: 20px 0px;
`;

export const ProductImageContainer = styled.div`
  width: ${(props) => (props.isRow ? '50%' : '90%')};
  min-width: 350px;
  max-width: 700px;
  // height:30vw;
  // min-height:300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:black;
  border-radius:20px;
  padding:10px 5px;
`;

export const ProductMainImageContainer = styled.div`
  width:40vw;
  min-width: 160px;
  height:30vw;
  min-height:300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow:auto;
  border: 1px solid white;
  border-radius: 10px;
  background-color:white;
`;

export const ProductSmallImageContainer = styled.div`
  width:7vw;
  min-width:50px;
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
  overflow:hidden;
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
  min-width:40px;
  height:100%;
  min-height: 50px;
  background-color: Transparent;
  border-radius:10px;
  font-size:2vw;
  color: white;
  &: active {
    border:2px solid red;
  }
`;

export const ProductInfoContainer = styled(ProductImageContainer)`
  width: ${(props) => (props.isRow ? '45%' : '90%')};
  font-size:${(props) => (props.isRow ? '1.5vw' : '3vw')};
  overflow:hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items:flex-start;
  border-radius:20px;
  color:white;
`;

export const ProductStylesContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  background-color:black;
  border-radius:20px;
  color:white;
`;

export const ProductStylesButton = styled(ProductSmallImageButton)`
  border-radius: 5vw;
`;

export const ProductText = styled.div`
  font-size:${(props) => props.size}vw;
  color:${(props) => (props.color ? props.color : 'white')};
`;

export const Row = styled.div`
  width:90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin:0vw 1vw;
  padding:0vw 1vw 0.5vw 1vw;
`;

export const Column = styled.div`
  width:50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin:0vw 0vw;
  padding:0vw 0vw;
`;

export const Select = styled.select`
  width: 20vw;
  display: flex;
  flex-direction: column;
  font-size:${(props) => (props.isRow ? '1.5vw' : '3vw')};
  justify-content: space-between;
  border-radius:5px;
  margin:0vw 1vw;
  padding:0vw 1vw;
  &.option {
    width: 11vw;
    height:5vw;
  }
`;
