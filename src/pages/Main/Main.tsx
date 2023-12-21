import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Main=()=> {

  const navigate = useNavigate();

  // useState
  interface DataInterface {
    title?: string;
    image?: string;
  }
  const [data, setData] = useState<DataInterface>({});


  // 질문 페이지 이동
  const questionStart = () => {
    navigate(`/start?q=1`)
  }

  //[백엔드 통신] 타이틀 GET
  const getTitle = () => {
    fetch(
      `/data/title.json`,
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

  //useEffect
  useEffect(() => {
    getTitle();
  }, []);

  if (Object.keys(data).length === 0) return null;

  return (
    <MainStyle>
    <Container>
      <Title>{data.title}</Title>
      <MainPic src={`${data.image}`} alt="사진" />
      <MainBtn   onClick={()=>{questionStart()}}> 확인 하러가기</MainBtn>
    </Container>
    </MainStyle>
  );
}

export default Main;

const MainStyle = styled.div`
  margin-top:5%;
  width:100vw;
  height:100vh;
  @media (max-width: 500px){
    margin-top:10%;
  }

  @media (max-width: 360px){
    margin-top:15%;
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
    font-size:30px;
  }

  @media (max-width: 500px){
    font-size:25px;
  }

  @media (max-width: 360px){
    font-size:20px;
  }

`;

const MainPic = styled.img`
margin-top:15px;
  width: 500px;

  @media (max-width: 500px){
    width:350px;
  }
  @media (max-width: 360px){
    width:250px;

  }
`;

const MainBtn = styled.div`
margin-top: 55px;
text-align: center;
font-weight: 700;
font-size: 30px;
background-color: #FFC436;
width:400px;
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
