import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Start=()=> {
  const navigate = useNavigate();
  interface QuestionResult {
    testNumber: number;
    answer: number;
  }
  const [questionResult, setQuestionResult] = useState<QuestionResult[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const question = Number(searchParams.get('q'))-1 ?? '0';

  // useState
  interface DataInterface {
    index: number;
    title: string;
    questionFirst : string;
    questionSecond : string;

  }
  const [data, setData] = useState<DataInterface[]>([]);




  // 질문 결과 저장
  const saveResult = (parameter: number, questionNumber: number) => {
    setQuestionResult(prevResult => {
      // 중복된 testNumber 값 제거
      const updatedResult = prevResult.filter(item => item.testNumber !== parameter);
  
      // 새로운 값 추가
      return [...updatedResult, { testNumber: parameter, answer: questionNumber }];
    });
    

  }




  // 질문 페이지 이동
  const pageChange = (parameter:number|undefined) => {
  
    if(parameter===undefined){
      parameter=0;
    }

    if(parameter===5) {
      resultLogic();
      return;
    }

    searchParams.set('q', String(parameter+1));
    setSearchParams(searchParams);
  }

  //[백엔드 통신] 타이틀 GET
  const getQuestion = () => {

    fetch(
      `/data/question.json`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
      },
    )
      .then(response => {
        return response.json();
      })
      .then(result => {

        setData(result.data);
      });
  }

  //결과 조건문
  const resultLogic = () => {
    if((questionResult[0]?.testNumber!==undefined)&&questionResult.length===data.length){
      
      const q1 = questionResult[0].answer;
      const q2 = questionResult[1].answer;
      const q3 = questionResult[2].answer;
      const q4 = questionResult[3].answer; 
      const q5 = questionResult[4].answer;

      //result 분리버전
      if (q1 === 0 && q2 === 0 && q3 === 0 && q4 === 0 && q5 === 0) { navigate('/result?r=1'); }
      if (q1 === 0 && q2 === 0 && q3 === 0 && q4 === 0 && q5 === 1) { navigate('/result?r=2'); }
      if (q1 === 0 && q2 === 0 && q3 === 0 && q4 === 1 && q5 === 0) { navigate('/result?r=3'); }
      if (q1 === 0 && q2 === 0 && q3 === 0 && q4 === 1 && q5 === 1) { navigate('/result?r=4'); }
      if (q1 === 0 && q2 === 0 && q3 === 1 && q4 === 0 && q5 === 0) { navigate('/result?r=5'); }
      if (q1 === 0 && q2 === 0 && q3 === 1 && q4 === 0 && q5 === 1) { navigate('/result?r=6'); }
      if (q1 === 0 && q2 === 0 && q3 === 1 && q4 === 1 && q5 === 0) { navigate('/result?r=7'); }
      if (q1 === 0 && q2 === 0 && q3 === 1 && q4 === 1 && q5 === 1) { navigate('/result?r=8'); }
      if (q1 === 0 && q2 === 1 && q3 === 0 && q4 === 0 && q5 === 0) { navigate('/result?r=9'); }
      if (q1 === 0 && q2 === 1 && q3 === 0 && q4 === 0 && q5 === 1) { navigate('/result?r=10'); }
      if (q1 === 0 && q2 === 1 && q3 === 0 && q4 === 1 && q5 === 0) { navigate('/result?r=11'); }
      if (q1 === 0 && q2 === 1 && q3 === 0 && q4 === 1 && q5 === 1) { navigate('/result?r=12'); }
      if (q1 === 0 && q2 === 1 && q3 === 1 && q4 === 0 && q5 === 0) { navigate('/result?r=13'); }
      if (q1 === 0 && q2 === 1 && q3 === 1 && q4 === 0 && q5 === 1) { navigate('/result?r=14'); }
      if (q1 === 0 && q2 === 1 && q3 === 1 && q4 === 1 && q5 === 0) { navigate('/result?r=15'); }
      if (q1 === 0 && q2 === 1 && q3 === 1 && q4 === 1 && q5 === 1) { navigate('/result?r=16'); }
      if (q1 === 1 && q2 === 0 && q3 === 0 && q4 === 0 && q5 === 0) { navigate('/result?r=17'); }
      if (q1 === 1 && q2 === 0 && q3 === 0 && q4 === 0 && q5 === 1) { navigate('/result?r=18'); }
      if (q1 === 1 && q2 === 0 && q3 === 0 && q4 === 1 && q5 === 0) { navigate('/result?r=19'); }
      if (q1 === 1 && q2 === 0 && q3 === 0 && q4 === 1 && q5 === 1) { navigate('/result?r=20'); }
      if (q1 === 1 && q2 === 0 && q3 === 1 && q4 === 0 && q5 === 0) { navigate('/result?r=21'); }
      if (q1 === 1 && q2 === 0 && q3 === 1 && q4 === 0 && q5 === 1) { navigate('/result?r=22'); }
      if (q1 === 1 && q2 === 0 && q3 === 1 && q4 === 1 && q5 === 0) { navigate('/result?r=23'); }
      if (q1 === 1 && q2 === 0 && q3 === 1 && q4 === 1 && q5 === 1) { navigate('/result?r=24'); }
      if (q1 === 1 && q2 === 1 && q3 === 0 && q4 === 0 && q5 === 0) { navigate('/result?r=25'); }
      if (q1 === 1 && q2 === 1 && q3 === 0 && q4 === 0 && q5 === 1) { navigate('/result?r=26'); }
      if (q1 === 1 && q2 === 1 && q3 === 0 && q4 === 1 && q5 === 0) { navigate('/result?r=27'); }
      if (q1 === 1 && q2 === 1 && q3 === 0 && q4 === 1 && q5 === 1) { navigate('/result?r=28'); }
      if (q1 === 1 && q2 === 1 && q3 === 1 && q4 === 0 && q5 === 0) { navigate('/result?r=29'); }
      if (q1 === 1 && q2 === 1 && q3 === 1 && q4 === 0 && q5 === 1) { navigate('/result?r=30'); }
      if (q1 === 1 && q2 === 1 && q3 === 1 && q4 === 1 && q5 === 0) { navigate('/result?r=31'); }
      if (q1 === 1 && q2 === 1 && q3 === 1 && q4 === 1 && q5 === 1) { navigate('/result?r=32'); }

    }

   
  };
  //useEffect
    useEffect(() => {
      if(questionResult.length!==question){
        navigate('/')
      }
      getQuestion();
    }, []);

    useEffect(()=> {
      resultLogic();
    },[questionResult.length])

    if (data[0]===undefined) return null;

  return (
    <StartStyle>
      <Container>
    <Title>{data[question]?.title}</Title>
    <ChoiceBox>
    <StartChoiceBtn  onClick={()=>{
      saveResult(data[question].index, 0);
      pageChange(Number(data[question]?.index)+1)}}> {data[question]?.questionFirst}</StartChoiceBtn>
    <StartChoiceBtn  onClick={()=>{
      saveResult(data[question].index, 1);
      pageChange(Number(data[question]?.index)+1)}}> {data[question]?.questionSecond}</StartChoiceBtn>
    </ChoiceBox>
    </Container>
    </StartStyle>
  );
}

export default Start;

const StartStyle = styled.div`
  margin-top:5%;
  width:100vw;
  height:100vh;
  @media (max-width: 500px){
    margin-top:20%;
  }

  @media (max-width: 360px){
    margin-top:25%;
  }
`;

const Container = styled.div`
  margin:10px;
  display:flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  text-align: center;
  font-size:55px;
  font-weight:700;

  @media (max-width: 1024px){
    font-size:40px;

  }

  @media (max-width: 500px){
    font-size:30px;
  }

  @media (max-width: 360px){
    font-size:25px;

  }

`;

const ChoiceBox = styled.div`
  margin-top:5%;
  width: 500px;
  display:flex;
  flex-direction:column;
  align-items: center;
  @media (max-width: 500px){
    margin-top:10%;
    width:350px;
  }

  @media (max-width: 360px){
    margin-top:15%;
    width:250px;

  }

`;


const StartChoiceBtn = styled.div`
margin-top: 10%;
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
  @media (max-width: 1024px){
    font-size:30px;
  }

  @media (max-width: 500px){
    width:300px;
    font-size:25px;
  }

  @media (max-width: 360px){
    width:250px;
    font-size:20px;

  }

`;

