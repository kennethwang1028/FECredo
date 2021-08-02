import styled from 'styled-components';

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