import { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import Meta from "components/Meta";

const Result = () => {
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const resultNumber = Number(searchParams.get("r")) ?? 0;


	const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  interface ChickenInfo {
    [key: number]: {
      name: string;
      info: string;
      image: string;
    };
  }

  const chickenInfo: ChickenInfo = {
    0: {name:"당신과 어울리는 치킨은?", info:"매콤바삭", image: "/Images/chickenPic.png"},
    1: { name: "굽네 고추바사삭 순살", info: "매콤바삭", image: "/Images/굽네고추바사삭.png" },
    2: { name: "굽네 고추바사삭 순살 곱빼기", info: "매콤바삭", image: "/Images/굽네고추바사삭.png" },
    3: { name: "굽네 오리지널 순살", info: "오븐구이 치킨의 원조", image: "/Images/굽네오리지널.png" },
    4: { name: "굽네 오리지널 순살+치트킹(콘치즈)", info: "만능 시즈닝과 세트!", image: "/Images/굽네오지리널치트킹.png" },
    5: { name: "굽네 고추바사삭", info: "매콤바삭", image: "/Images/굽네고추바사삭.png" },
    6: { name: "굽네 고추바사삭 곱빼기", info: "매콤바삭", image: "/Images/굽네고추바사삭.png" },
    7: { name: "굽네 오리지널", info: "오븐구이 치킨의 원조", image: "/Images/굽네오리지널.png" },
    8: { name: "굽네 오리지널+치트킹(콘치즈)", info: "만능 시즈닝과 세트!", image: "/Images/굽네오리지널치트킹.png" },
    9: { name: "굽네 볼케이노 순살", info: "중독성 있는 불맛", image: "/Images/굽네볼케이노.png" },
    10: { name: "굽네 볼케이노 순살", info: "중독성 있는 불맛", image: "/Images/굽네볼케이노.png" },
    11: { name: "굽네 갈비천왕 순살", info: "단짠단짠의 정석", image: "/Images/굽네갈비천왕.png" },
    12: { name: "굽네 갈비천왕 순살", info: "단짠단짠의 정석", image: "/Images/굽네갈비천왕.png" },
    13: { name: "굽네 불금치킨", info: "매콤한 양념소스에 버터갈릭 소스까지", image: "/Images/굽네불금치킨.png" },
    14: { name: "BBQ 자메이카 통다리구이", info: "통다리에 자메이카 저크소스!", image: "/Images/BBQ자메이카통다리.png" },
    15: { name: "굽네 갈비천왕", info: "단짠단짠의 정석", image: "/Images/굽네갈비천왕.png" },
    16: { name: "굽네 갈비천왕", info: "단짠단짠의 정석", image: "/Images/굽네갈비천왕.png" },
    17: { name: "BHC HOT 후라이드치킨 순살", info: "명불허전! 바삭함, 고소함 가득!", image: "/Images/BHC핫후라이드.jpg" },
    18: { name: "BBQ HOT황금올리브치킨 크리스피 순살", info: "겉은 바삭 육즙 가득", image: "/Images/BBQ핫황금올리브치킨크리스피순살.png" },
    19: { name: "BBQ 황금올리브치킨 순살", info: "겉은 바삭 육즙 가득", image: "/Images/BBQ황금올리브치킨.png" },
    20: { name: "BBQ 크런치 순살크래커", info: "황금올리브 닭다리살에, 바삭한 순살 치킨", image: "/Images/BBQ크런치순살크래커.png" },
    21: { name: "BHC HOT 후라이드치킨", info: "명불허전! 바삭함, 고소함 가득!", image: "/Images/BHC핫후라이드.jpg"},
    22: { name: "BBQ HOT황금올리브치킨 크리스피", info: "겉은 바삭 육즙 가득", image: "/Images/BBQ핫황금올리브치킨크리스피순살.png" },
    23: { name: "BBQ 황금올리브치킨", info: "겉은 바삭 육즙 가득", image: "/Images/BBQ황금올리브치킨.png" },
    24: { name: "BBQ 황금올리브치킨콤보", info: "닭다리, 윙, 봉으로 이루어진 후라이드의 대명사", image: "/Images/BBQ황금올리브치킨콤보.png" },
    25: { name: "BHC 레드킹 순살", info: "매콤달콤!", image: "/Images/BHC레드킹순살.jpg" },
    26: { name: "푸라닭 고추마요 순살", info: "단짠단짠! 숙성간장과 꿀의 황금비율", image: "/Images/푸라닭고추마요.png" },
    27: { name: "BHC 골드킹 순살", info: "계속 손이 갈 수 밖에 없는 마법의 치킨", image: "/Images/BHC골드킹순살.png" },
    28: { name: "푸라닭 블랙알리오 순살", info: "깊고 진한 간장과 고소하면서 담백한 마늘의 만남!", image: "/Images/푸라닭블랙알리오.png" },
    29: { name: "BHC 레드킹", info: "매콤달콤!", image: "/Images/BHC레드킹.jpg" },
    30: { name: "푸라닭 고추마요 순살", info: "단짠단짠! 숙성간장과 꿀의 황금비율", image: "/Images/푸라닭고추마요.png" },
    31: { name: "BHC 골드킹", info: "계속 손이 갈 수 밖에 없는 마법의 치킨", image: "/Images/BHC골드킹.png" },
    32: { name: "푸라닭 블랙알리오", info: "깊고 진한 간장과 고소하면서 담백한 마늘의 만남!", image: "/Images/푸라닭블랙알리오.png" }
  };

  const currentResult: { name: string; info: string; image: string } = chickenInfo[resultNumber] || {
    name: "치킨 이름",
    info: "치킨설명",
    image: "/Images/굽네볼케이노.png",
  };

  const currentURL = window.location.href;

  // 이미지 로딩 관리
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  }

  return (
    <>
    <Meta title={currentResult.name} image={currentResult.image}/>
    <ResultStyle>
      <Container>
      <Title>당신과 어울리는 <HighLight>치킨</HighLight>은?</Title>
      <ResultName>{currentResult.name}</ResultName>
      <ResultInfo>{currentResult.info}</ResultInfo>
  {isImageLoaded ? null : <ResultPicWaiting>결과 검색중</ResultPicWaiting>}
      <ResultPic onLoad={handleImageLoad} src={currentResult.image} alt="치킨사진" />
      <ChoiceBox>
        <ResultBtn
          onClick={() => {
            navigate("/");
          }}
        >
          테스트 다시하기
        </ResultBtn>
        <ResultBtn
          onClick={() => {
            handleCopyClipBoard(currentURL)
          }}
        >
          결과 공유하기
        </ResultBtn>
      </ChoiceBox>
      </Container>
    </ResultStyle>
    </>
  );
};

export default Result;

const ResultStyle = styled.div`
  margin-top:2%;
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
  font-size: 35px;
  font-weight: 500;

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

const HighLight = styled.span`
  color:#FE7A36;
`;

const ResultName = styled.div`
  margin-top: 2%;
  text-align: center;
  font-size: 45px;
  font-weight: 700;
  @media (max-width: 1024px){
    font-size:40px;
  }

  @media (max-width: 500px){
    font-size:35px;
  }

  @media (max-width: 360px){
    font-size:30px;
  }

`;



const ResultInfo = styled.div`
  margin-top: 3%;
  text-align: center;
  font-size: 25px;
  font-weight: 500;

  @media (max-width: 360px){
    font-size:14px;
  }

`;

const ResultPic = styled.img`
  margin-top: 15px;
  width: 450px;

  object-fit: cover;
  @media (max-width: 500px){

    width:300px;
  }
  @media (max-width: 360px){

    width:250px;
  }
`;

const ResultPicWaiting = styled.div`
  margin-top: 15px;
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

const ChoiceBox = styled.div`
margin-top:3px;
  width: 450px;
  display:flex;
  flex-direction:column;
  align-items: center;
  gap: 15px;
  @media (max-width: 500px){
    width:330px;
  }

  @media (max-width: 360px){
    width:250px;
  }
`;

const ResultBtn = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 30px;
  background-color: #ffc436;
  width: 100%;
  padding: 15px 0;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ffd966;
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
