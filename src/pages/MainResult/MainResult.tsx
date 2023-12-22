import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';

const Main=()=> {

  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isResultImageLoaded, setIsResultImageLoaded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const resultNumber = Number(searchParams.get("r")) ?? "0";


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

  // 이미지 로딩 관리
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  }

  const handleResultImageLoad = () => {
    setIsResultImageLoaded(true);
  }

  let chickenName;
  let chickenImage;
  let chickenInfo;

  if (resultNumber === 1) {
    chickenName = "굽네 고추바사삭 순살";
    chickenInfo = "매콤바삭";
    chickenImage = "/Images/굽네고추바사삭.png";
  }
  if (resultNumber === 2) {
    chickenName = "굽네 고추바사삭 순살 곱빼기";
    chickenInfo = "매콤바삭";
    chickenImage = "/Images/굽네고추바사삭.png";
  }
  if (resultNumber === 3) {
    chickenName = "굽네 오리지널 순살";
    chickenInfo = "오븐구이 치킨의 원조";
    chickenImage = "/Images/굽네오리지널.png";
  }
  if (resultNumber === 4) {
    chickenName = "굽네 오리지널 순살+치트킹(콘치즈)";
    chickenInfo = "만능 시즈닝과 세트!";
    chickenImage = "/Images/굽네오지리널치트킹.png";
  }
  if (resultNumber === 5) {
    chickenName = "굽네 고추바사삭";
    chickenInfo = "매콤바삭";
    chickenImage = "/Images/굽네고추바사삭.png";
  }
  if (resultNumber === 6) {
    chickenName = "굽네 고추바사삭 곱빼기";
    chickenInfo = "매콤바삭";
    chickenImage = "/Images/굽네고추바사삭.png";
  }
  if (resultNumber === 7) {
    chickenName = "굽네 오리지널";
    chickenInfo = "오븐구이 치킨의 원조";
    chickenImage = "/Images/굽네오리지널.png";
  }
  if (resultNumber === 8) {
    chickenName = "굽네 오리지널+치트킹(콘치즈)";
    chickenInfo = "만능 시즈닝과 세트!";
    chickenImage = "/Images/굽네오리지널치트킹.png";
  }
  if (resultNumber === 9) {
    chickenName = "굽네 볼케이노 순살";
    chickenInfo = "중독성 있는 불맛";
    chickenImage = "/Images/굽네볼케이노.png";
  }
  if (resultNumber === 10) {
    chickenName = "굽네 볼케이노 순살";
    chickenInfo = "중독성 있는 불맛";
    chickenImage = "/Images/굽네볼케이노.png";
  }
  if (resultNumber === 11) {
    chickenName = "굽네 갈비천왕 순살";
    chickenInfo = "단짠단짠의 정석";
    chickenImage = "/Images/굽네갈비천왕.png";
  }
  if (resultNumber === 12) {
    chickenName = "굽네 갈비천왕 순살";
    chickenInfo = "단짠단짠의 정석";
    chickenImage = "/Images/굽네갈비천왕.png";
  }
  if (resultNumber === 13) {
    chickenName = "굽네 불금치킨";
    chickenInfo = "매콤한 양념소스에 버터갈릭 소스까지";
    chickenImage = "/Images/굽네불금치킨.png";
  }
  if (resultNumber === 14) {
    chickenName = "BBQ 자메이카 통다리구이";
    chickenInfo = "통다리에 자메이카 저크소스!";
    chickenImage = "/Images/BBQ자메이카통다리.png";
  }
  if (resultNumber === 15) {
    chickenName = "굽네 갈비천왕";
    chickenInfo = "단짠단짠의 정석";
    chickenImage = "/Images/굽네갈비천왕.png";
  }
  if (resultNumber === 16) {
    chickenName = "굽네 갈비천왕";
    chickenInfo = "단짠단짠의 정석";
    chickenImage = "/Images/굽네갈비천왕.png";
  }
  if (resultNumber === 17) {
    chickenName = "BHC HOT 후라이드치킨 순살";
    chickenInfo = "명불허전! 바삭함, 고소함 가득!";
    chickenImage = "/Images/BHC핫후라이드.jpg";
  }
  if (resultNumber === 18) {
    chickenName = "BBQ HOT황금올리브치킨 크리스피 순살";
    chickenInfo = "겉은 바삭 육즙 가득";
    chickenImage = "/Images/BBQ핫황금올리브치킨크리스피순살.png";
  }
  if (resultNumber === 19) {
    chickenName = "BBQ 황금올리브치킨 순살";
    chickenInfo = "겉은 바삭 육즙 가득";
    chickenImage = "/Images/BBQ황금올리브치킨.png";
  }
  if (resultNumber === 20) {
    chickenName = "BBQ 크런치 순살크래커";
    chickenInfo = "황금올리브 닭다리살에, 바삭한 순살 치킨";
    chickenImage = "/Images/BBQ크런치순살크래커.png";
  }
  if (resultNumber === 21) {
    chickenName = "BHC HOT 후라이드치킨";
    chickenInfo = "명불허전! 바삭함, 고소함 가득!";
    chickenImage = "/Images/BHC핫후라이드.png";
  }
  if (resultNumber === 22) {
    chickenName = "BBQ HOT황금올리브치킨 크리스피";
    chickenInfo = "겉은 바삭 육즙 가득";
    chickenImage = "/Images/BBQ핫황금올리브치킨크리스피순살.png";
  }
  if (resultNumber === 23) {
    chickenName = "BBQ 황금올리브치킨";
    chickenInfo = "겉은 바삭 육즙 가득";
    chickenImage = "/Images/BBQ황금올리브치킨.png";
  }
  if (resultNumber === 24) {
    chickenName = "BBQ 황금올리브치킨콤보";
    chickenInfo = "닭다리, 윙, 봉으로 이루어진 후라이드의 대명사";
    chickenImage = "/Images/BBQ황금올리브치킨콤보.png";
  }
  if (resultNumber === 25) {
    chickenName = "BHC 레드킹 순살";
    chickenInfo = "매콤달콤!";
    chickenImage = "/Images/BHC레드킹순살.jpg";
  }
  if (resultNumber === 26) {
    chickenName = "푸라닭 고추마요 순살";
    chickenInfo = "단짠단짠! 숙성간장과 꿀의 황금비율";
    chickenImage = "/Images/푸라닭고추마요.png";
  }
  if (resultNumber === 27) {
    chickenName = "BHC 골드킹 순살";
    chickenInfo = "계속 손이 갈 수 밖에 없는 마법의 치킨";
    chickenImage = "/Images/BHC골드킹순살.png";
  }
  if (resultNumber === 28) {
    chickenName = "푸라닭 블랙알리오 순살";
    chickenInfo = "깊고 진한 간장과 고소하면서 담백한 마늘의 만남!";
    chickenImage = "/Images/푸라닭블랙알리오.png";
  }
  if (resultNumber === 29) {
    chickenName = "BHC 레드킹";
    chickenInfo = "매콤달콤!";
    chickenImage = "/Images/BHC레드킹.jpg";
  }
  if (resultNumber === 30) {
    chickenName = "푸라닭 고추마요 순살";
    chickenInfo = "단짠단짠! 숙성간장과 꿀의 황금비율";
    chickenImage = "/Images/푸라닭고추마요.png";
  }
  if (resultNumber === 31) {
    chickenName = "BHC 골드킹";
    chickenInfo = "계속 손이 갈 수 밖에 없는 마법의 치킨";
    chickenImage = "/Images/BHC골드킹.png";
  }
  if (resultNumber === 32) {
    chickenName = "푸라닭 블랙알리오";
    chickenInfo = "깊고 진한 간장과 고소하면서 담백한 마늘의 만남!";
    chickenImage = "/Images/푸라닭블랙알리오.png";
  }

  const currentURL = window.location.href;

  //useEffect
  useEffect(() => {
    getTitle();
  }, []);

  if (Object.keys(data).length === 0) return null;

  return (
    <>

    <MainStyle>
    <Container>
      <Title>{data.title}</Title>
      {isImageLoaded? null : <MainPicWaiting>사진 불러오는 중..</MainPicWaiting> }
      <MainPic  onLoad={handleImageLoad} src={`${data.image}`} alt="사진" />
      <MainBtn   onClick={()=>{questionStart()}}> 확인 하러가기</MainBtn>
    </Container>
    </MainStyle>
      
    </>
  );
}

export default Main;

const MainStyle = styled.div`
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
    font-size:30px;
  }

  @media (max-width: 500px){
    font-size:30px;
  }

  @media (max-width: 360px){
    font-size:20px;
  }

`;

const MainPicWaiting = styled.div`
 margin-top: 30px;
  width: 150px;
  height: 80px;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid black;
    font-weight:700;
  background-color:#FFC436;
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
    font-size:15px;

  }

`;