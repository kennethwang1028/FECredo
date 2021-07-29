import styled from 'styled-components';

export const HomeContainer = styled.div`
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:black;
  padding-left: ${(props) => (props.extent ? '230px' : '70px')}
`;

export const TopContainer = styled.div`
  width:90%;
  height:300px;
  // overflow:hidden;
  display:flex;
  justify-content: space-between;
  // align-items: center;
  border: 1px soild black;
  border-radius:10px;
  background: url(${(props) => props.image});
  background-size:cover;
  padding-top:20px;
`;

export const TopButton = styled.button`
  width:100px;
  height:280px;
  font-size:36px;
  border: none;
  background: rgba(0,0,0,0);
  &:hover{
    background: rgba(0,0,0,0.5);
  }
`;

export const TopImage = styled.img`
  width:250px;
  height:280px;
  border:2px solid black;
  border-radius: 10px;
  &:hover{
    background: rgba(0,0,0,0.5);
  }
`;

export const TopText = styled.div`
  display:flex;
  flex-direction: column;
  width:250px;
  height:280px;
  // border:2px solid black;
  // border-radius: 10px;
  color:black;
  font-size:24px;
  padding-top: 20px;
`;

export const TopTextP = styled.p`
  font-size:16px
`;

export const TopCheckButton = styled.button`
  height:30px;
  width:60px;
  margin:20px;
  margin-top:170px;
  opacity: 0.5;
`;
