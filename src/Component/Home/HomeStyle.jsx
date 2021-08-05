import styled from 'styled-components';

export const HomeContainer = styled.div`
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, black , black 350px, white 700px,  white);;
  padding-left: ${(props) => (props.extent ? '230px' : '70px')}
`;

export const TopContainer = styled.div`
  // width:90%;
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
  position: relative;
  margin-top: 20px;
`;

export const TopButton = styled.button`
  width:10%;
  height:280px;
  font-size:50%;
  border: none;
  background: rgba(0,0,0,0);
  &:hover{
    background: rgba(0,0,0,0.5);
  }
  position: relative;
`;

export const TopImage = styled.img`
  width:25%;
  height:280px;
  border:2px solid black;
  border-radius: 10px;
  &:hover{
    background: rgba(0,0,0,0.5);
  }
  position: relative;
`;

export const TopText = styled.div`
  display:flex;
  flex-direction: column;
  width:25%;
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
  border-radius:10px;
  opacity: 0.5;
`;

export const CategoryBoxContainer = styled.div`
  border: 1px solid #edf2f5;
  border-radius: 10px;
  width:250px;
  height:400px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right:10px;
  background-color:#edf2f5;
  color:black;s
`;

export const RowContainer = styled.div`
  width:90%;
  border-radius: 10px;
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
  overflow: auto;
  position: relative;
  margin:15px;
`;

export const CategoryTopContainer = styled.div`
  width:200px;
  display:flex;
  font-size:24px;
  overflow:hidden;
  border:none;
  margin-top:5%;
  margin-bottom:5%;
`;
export const CategoryMiddleContainer = styled.div`
  width:200px;
  height:350px;
  display:flex;
  overflow:hidden;
  border:none;
  flex-direction: column;
`;

export const CategoryBoxImg = styled.img`
  display:flex;
  overflow:hidden;
  border:none;
  flex-direction: column;
  position: relative;
`;
export const CategoryBoxButton = styled.button`
  display:flex;
  overflow:hidden;
  border:none;
  // margin-top:5%;
  margin-bottom:5%;
  background-color:#edf2f5;
  &:hover {
    border-radius:10px;
    background-color:white;
  }
  position: relative;
`;

export const CategoryBoxFourContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position:relative;
  width:30%;
  background-color:#edf2f5;
  border-radius:10px;
  margin-right:2.5vw
`;

export const CategoryBoxFourImgContainer = styled.div`
  position: relative;
  display:flex;
  flex-direction: row;
  width:22vw;
`;

export const CategoryBoxFourImg = styled.button`
  position: relative;
  width: 10vw;
  height: 10vw;
  background-size:cover;
  border-radius:10px;
  border:none;
  margin-top:1vw;
  background-image:url(${(props) => props.src})
`;
export const CategoryBoxFourName = styled.button`
  position:relative;
  width:10vw;
  height:2vw;
  background-color:#edf2f5;
  font-size: 1vw;
  display:flex;
  justify-content: center;
  align-items: center;
  color:black;
  margin-right:1vw;
  border:none;
  border-radius: 10px;
  &:active {
    border:1px solid black;
    border-radius: 10px;
    background-color:white
  }
`;
export const CategoryBoxFourCategory = styled.button`
  position:relative;
  width:21vw;
  height:3vw;
  background-color:#edf2f5;
  font-size: 2vw;
  display:flex;
  justify-content: center;
  margin:1vw;
  align-items: center;
  color:black;
  border-radius: 10px;
  &:active {
    border:1px solid black;
    border-radius: 10px;
    background-color:white
  }
`;
