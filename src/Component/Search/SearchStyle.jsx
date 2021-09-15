import styled from 'styled-components';

export const ContainerStyle = styled.div`
  width:200px;
  padding:5px;
  margin:5px;
  border-radius:10px
`;

export const ColumnContainerStyle = styled.div`
  padding-top:2vw;
  overflow:auto;
  position:relative;
  background-color:white;
  color:black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RowContainerStyle = styled.div`
  padding-top:1vw;
  color:black;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SearchPageButtonStyle = styled.button`
  background-color:${(props) => (props.pageSelected ? '#a5aaad' : 'white')};
  font-size:2vw;
  font-size: 16px;
  margin:0.5vw;
  border-radius: 5px;
  &:hover {
    background-color:#a5aaad;
  }
  &:active {
    color:white;
  }
`;

export const SearchContainer = styled.div`
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, black , black 350px, white 700px,  white);;
  padding-left: ${(props) => (props.extent ? '230px' : '70px')}
`;

export const SearchCategoryBox = styled.div`
  height:5vw;
  width:60vw;
  display: flex;
  flex-direction: row;
  padding:1vw;
  justify-content: center;
  align-items: center;
`;

export const SearchCategoryInput = styled.input`
  width:50vw;
  font-size: 3vw;
  margin-left:0.5vw;
`;

export const SearchCategoryButton = styled.button`
  // width:12vw;
  font-size: 3vw;
  border-radius:0% 10px 10px 0%;
  margin-left:0.5vw;
`;

export const SearchSelectStyle = styled.select`
  font-size: 3vw;
  display: flex;
`;
