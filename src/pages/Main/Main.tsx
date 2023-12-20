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



  return (
    <MainStyle>
    <Title>{data.title}</Title>
    <MainPic src={`${data.image}`} alt="사진" />
    <MainBtn   onClick={()=>{questionStart()}}> 확인 하러가기</MainBtn>
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
  &:hover {
    background-color: #FFD966;
  }
`;
