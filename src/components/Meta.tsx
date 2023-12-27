import { Helmet } from 'react-helmet-async';
import { useNavigate, useSearchParams } from "react-router-dom";
interface MetaProps{
  title:string,
  image:string
}

const Meta = ({ title, image }: MetaProps) => {

  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content="궁금하지? 너를 위한 치킨" />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

export default Meta;