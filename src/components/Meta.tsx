import { Helmet } from 'react-helmet-async';
import { useNavigate, useSearchParams } from "react-router-dom";
interface MetaProps{
  title:string,
  image:string
}



const Meta = ({ title, image }: MetaProps) => {

  const [searchParams, setSearchParams] = useSearchParams();
  const resultNumber = (searchParams.get("r")) ?? "0";

  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={resultNumber} />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

export default Meta;