import styled from 'styled-components';

export const ContainerStyle = styled.div`
  width:${(props) => props.width}px;
  min-width: 400px;
`;

export const RowConatainerStyle = styled.div`
  min-width: 400px;
  padding:10px;
  display:flex;
  flex-direction: row;
  justify-content:space-evenly;
  align-items: center;
`;

export const RowStyle = styled.div`
  width: 95%;
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  align-items: center;
`;

export const ProductButtonStyle = styled.button`
  width:5vw;
  min-width:50px;
  height:5vw;
  min-height:50px;
  border-radius: 5vw;
  &: hover {
    background-color: #a5aaad;
  }
  &: active {
    border:2px solid red;
  }
  // overflow:hidden;
  // background-image:url(${(props) => props.src});
  // background-size:cover;
  // border-radius:10px;
  // ${(props) => (props.isSeleced ? 'border:2px solid red;' : null)}
`;

export const StylesButtonStyle = styled(ProductButtonStyle)`
  width:20px;
  height:20px;
  background-image:url(${(props) => props.src});
  background-size:cover
`;

export const ProductDetailContainerStyle = styled.div`
  min-width: 400px;
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

export const ProductSmallImageButtonStyle = styled.button`
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

export const ProductTextStyle = styled.div`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => (props.color ? props.color : 'white')};
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

export const RowContainerStyle = styled.div`
  padding-top:1vw;
  color:black;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Column = styled.div`
  width:50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin:0vw 0vw;
  padding:0vw 0vw;
`;
export const ColumnEnd = styled(Column)`
  align-items: flex-end;
`;

export const Select = styled.select`
  width: 20vw;
  display: flex;
  flex-direction: column;
  font-size:16px;
  justify-content: space-between;
  border-radius:5px;
  margin:0vw 1vw;
  padding:0vw 1vw;
  &.option {
    width: 11vw;
    height:5vw;
  }
`;
