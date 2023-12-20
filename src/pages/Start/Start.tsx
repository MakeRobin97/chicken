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
  const pageChange = () => {
    if(questionResult[0]?.answer===undefined){
      return
    }
    searchParams.set('q', String(question+2));
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
    if (data[0]?.title !== undefined && data.length === Number(question)) {
      const binaryValue = (value:number) => (value === 0 ? '0' : '1');
      const resultNumber = parseInt(
        questionResult.map((result) => binaryValue(result.answer)).join(''),
        2
      );
  
      const resultMappings = [
        '/result?r=1',
        '/result?r=2',
        '/result?r=3',
        '/result?r=4',
        '/result?r=5',
        '/result?r=6',
        '/result?r=7',
        '/result?r=8',
        '/result?r=9',
        '/result?r=10',
        '/result?r=11',
        '/result?r=12',
        '/result?r=13',
        '/result?r=14',
        '/result?r=15',
        '/result?r=16',
        '/result?r=17',
        '/result?r=18',
        '/result?r=19',
        '/result?r=20',
        '/result?r=21',
        '/result?r=22',
        '/result?r=23',
        '/result?r=24',
        '/result?r=25',
        '/result?r=26',
        '/result?r=27',
        '/result?r=28',
        '/result?r=29',
        '/result?r=30',
        '/result?r=31',
        '/result?r=32',
      ];
  
      if (resultMappings[resultNumber - 1]) {
        navigate(resultMappings[resultNumber - 1]);
      }
    }
  };
  //useEffect
    useEffect(() => {
      getQuestion();
    }, []);

    useEffect(()=> {
      pageChange();
    }, [searchParams])


  return (
    <StartStyle>
    <Title>{data[question]?.title}</Title>
    <ChoiceBox>
    <StartChoiceBtn  onClick={()=>{
      saveResult(data[question].index, 0);
     }}> {data[question]?.questionFirst}</StartChoiceBtn>
    <StartChoiceBtn  onClick={()=>{
      saveResult(data[question].index, 1);
     }}> {data[question]?.questionSecond}</StartChoiceBtn>
    </ChoiceBox>
    </StartStyle>
  );
}

export default Start;

const StartStyle = styled.div`
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

const ChoiceBox = styled.div`
  margin-top:60px;
  width:550px;

`;


const StartChoiceBtn = styled.div`
margin-top: 50px;
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

