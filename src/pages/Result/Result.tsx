import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Result=()=> {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const resultNumber = Number(searchParams.get('r')) ?? '0';
  
  let chickenName;
  let chickenImage;

  if(resultNumber===1){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===2){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===3){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===4){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===5){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===6){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===7){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===8){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===9){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===10){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===11){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===12){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===13){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===14){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===15){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===16){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===17){chickenName='60계치킨 하하핫 치킨'; chickenImage='/Images/하하핫치킨.png'}
  if(resultNumber===18){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===19){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===20){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===21){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===22){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===23){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===24){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===25){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===26){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===27){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===28){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===29){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===30){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===31){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}
  if(resultNumber===32){chickenName='BHC 황금올리브 치킨'; chickenImage='/Images/chicken1.png'}



  return (
    <ResultStyle>
    <Title>당신과 어울리는 치킨은?</Title>
    <ResultName>{chickenName}</ResultName>
    <ResultPic src={chickenImage} alt="사진" />

    <ChoiceBox>
    <ResultBtn  onClick={()=>{navigate('/')}}>테스트 다시하기</ResultBtn>
    <ResultBtn  onClick={()=>{navigate('/')}}>결과 공유하기</ResultBtn>
    </ChoiceBox>
    </ResultStyle>
  );
}

export default Result;

const ResultStyle = styled.div`
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

const ResultName = styled.div`
margin-top:40px;
    text-align: center;
  font-size:45px;
  font-weight:700;
`;


const ResultPic = styled.img`
margin-top:15px;
  width: 500px;
`;

const ChoiceBox = styled.div`
  width:550px;
`;


const ResultBtn = styled.div`
margin-top: 30px;
text-align: center;
font-weight: 700;
font-size: 30px;
background-color: #FFC436;
width: 100%;
padding:15px 0;
border-radius: 5px;
cursor: pointer;
  &:hover {
    background-color: #FFD966;
  }
`;

