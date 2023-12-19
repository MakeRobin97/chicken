import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Main=()=> {

  const navigate = useNavigate();

  const testStart = (parameter) => {
    navigate(`/start/${parameter}`)
  }

  return (
    <MainStyle>
    <Title>당신에게 어울리는 치킨은?</Title>
    <MainPic src="/images/chickenPic.png" alt="치킨사진" />
    <MainBtn onClick={()=>{testStart(1)}}> 확인 하러가기</MainBtn>
    </MainStyle>
  );
}

export default Main;

const MainStyle = styled.div`
  margin-top:100px;
  display:flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  text-align: center;
  font-size:55px;
  font-weight:700;
`;

const MainPic = styled.img`
margin-top:15px;
  width: 500px;
`;

const MainBtn = styled.div`
margin-top: 55px;
text-align: center;
font-weight: 700;
font-size: 30px;
background-color: #FFC436;
width: 100%;
padding:15px 0;
border-radius: 5px;
cursor: pointer;
`;
