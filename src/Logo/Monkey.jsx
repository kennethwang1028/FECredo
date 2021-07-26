import styled from 'styled-components';
import React from 'react';

const Monkey0 = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`;

const Monkey1 = styled.div`
  width: 100%;
  height: 20%;
  font-size: 30px;
  display: flex;
  justify-content: center;
  position: absolute;
`;

const Monkey2 = styled.div`
  width: 80%;
  height: 70%;
  top: 35%;
  left: 10%;
  clip-path: ellipse(45% 40% at 50% 50%);
  position: absolute;
  background-color: rgb(100, 40, 0);
  z-index: 22;
`;

const Monkey3 = styled.div`
  width: 60%;
  height: 60%;
  top: 10%;
  left: 20%;
  position: absolute;
  clip-path: ellipse(50% 44% at 50% 50%);
  background-color: rgb(100, 40, 0);
  z-index: 22;
`;

const Monkey4 = styled.div`
  width: 30%;
  height: 30%;
  top: 30%;
  left: 70%;
  position: absolute;
  background-color: rgb(100, 40, 0);
  z-index: 20;
  clip-path: ellipse(40% 50% at 50% 50%);
`;

const Monkey5 = styled.div`
  width: 20%;
  height: 20%;
  top: 35%;
  left: 75%;
  position: absolute;
  background-color: rgb(215 135 85);
  clip-path: ellipse(40% 50% at 50% 50%);
  z-index: 21;
`;

const Monkey6 = styled.div`
  width: 30%;
  height: 30%;
  top: 30%;
  left: 0%;
  position: absolute;
  background-color: rgb(100, 40, 0);
  z-index: 20;
  clip-path: ellipse(40% 50% at 50% 50%);
`;

const Monkey7 = styled.div`
  width: 20%;
  height: 20%;
  top: 35%;
  left: 5%;
  position: absolute;
  background-color: rgb(215 135 85);
  clip-path: ellipse(40% 50% at 50% 50%);
  z-index: 21;
`;

const Monkey8 = styled.div`
  width: 70%;
  height: 60%;
  top: 40%;
  left: 15%;
  position: absolute;
  background-color: rgb(215 135 85);
  clip-path: ellipse(44% 40% at 50% 50%);
  z-index: 23;
`;

const Monkey9 = styled.div`
  width: 30%;
  height: 30%;
  top: 25%;
  left: 25%;
  position: absolute;
  background-color: rgb(215 135 85);
  clip-path: ellipse(40% 50% at 50% 50%);
  z-index: 23;
`;

const Monkey10 = styled.div`
  width: 30%;
  height: 30%;
  top: 25%;
  left: 45%;
  position: absolute;
  background-color: rgb(215 135 85);
  clip-path: ellipse(40% 50% at 50% 50%);
  z-index: 23;
`;

const Monkey11 = styled.div`
  width: 20%;
  height: 20%;
  top: 35%;
  left: 30%;
  position: absolute;
  background-color: white;
  clip-path: ellipse(45% 50% at 50% 50%);
  z-index: 23;
`;

const Monkey12 = styled.div`
  width: 20%;
  height: 20%;
  top: 35%;
  left: 50%;
  position: absolute;
  background-color: white;
  clip-path: ellipse(45% 35% at 50% 50%);
  z-index: 23;
`;

const Monkey13 = styled.div`
  width: 15%;
  height: 15%;
  top: 40%;
  left: 55%;
  position: absolute;
  background-color: black;
  clip-path: ellipse(45% 35% at 50% 50%);
  z-index: 24;
`;

const Monkey14 = styled.div`
  width: 15%;
  height: 15%;
  top: 40%;
  left: 35%;
  position: absolute;
  background-color: black;
  clip-path: ellipse(45% 35% at 50% 50%);
  z-index: 24;
`;

const Monkey15 = styled.div`
  width: 45%;
  height: 20%;
  top: 65%;
  left: 30%;
  position: absolute;
  background-color: red;
  clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
  z-index: 24;
`;

const Monkey16 = styled.div`
  width: 10%;
  height: 10%;
  top: 57%;
  left: 40%;
  position: absolute;
  background: linear-gradient(to top,rgb(215 135 85)50%,rgb(100, 40, 0));
  clip-path: ellipse(45% 35% at 50% 50%);
  z-index: 24;
`;

const Monkey17 = styled.div`
  width: 10%;
  height: 10%;
  top: 57%;
  left: 50%;
  position: absolute;
  background: linear-gradient(to top,rgb(215 135 85)50%,rgb(100, 40, 0));
  clip-path: ellipse(45% 35% at 50% 50%);
  z-index: 24;
`;

const Monkey18 = styled.div`
  width: 5%;
  height: 5%;
  top: 59%;
  left: 43%;
  position: absolute;
  background-color: rgb(215 135 85);
  clip-path: ellipse(45% 35% at 50% 50%);
  z-index: 25;
`;

const Monkey19 = styled.div`
  width: 5%;
  height: 5%;
  top: 59%;
  left: 53%;
  position: absolute;
  background-color: rgb(215 135 85);
  clip-path: ellipse(45% 35% at 50% 50%);
  z-index: 25;
`;

const Monkey20 = styled.div`
  width: 5%;
  height: 5%;
  top: 19%;
  left: 25%;
  position: absolute;
  background-color: rgb(100, 40, 0);
  clip-path: polygon(0 0, 34% 100%, 100% 100%);
  z-index: 25;
`;

const Monkey21 = styled.div`
  width: 5%;
  height: 5%;
  top: 22%;
  left: 22%;
  position: absolute;
  background-color: rgb(100, 40, 0);
  clip-path: polygon(0 0, 34% 100%, 100% 100%);
  z-index: 25;
`;

const Monkey22 = styled.div`
  width: 7%;
  height: 10%;
  top: 14%;
  left: 26%;
  position: absolute;
  background-color: rgb(100, 40, 0);
  clip-path: polygon(0 0, 34% 100%, 100% 100%);
  z-index: 25;
`;

const Monkey = () => (
  <Monkey0>
    <Monkey1 />
    <Monkey2 />
    <Monkey3 />
    <Monkey4 />
    <Monkey5 />
    <Monkey6 />
    <Monkey7 />
    <Monkey8 />
    <Monkey9 />
    <Monkey10 />
    <Monkey11 />
    <Monkey12 />
    <Monkey13 />
    <Monkey14 />
    <Monkey15 />
    <Monkey16 />
    <Monkey17 />
    <Monkey18 />
    <Monkey19 />
    <Monkey20 />
    <Monkey21 />
    <Monkey22 />
  </Monkey0>
);

export default Monkey;
