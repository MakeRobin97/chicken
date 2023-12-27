import { Helmet } from 'react-helmet-async';

interface MetaProps{
  title:string,
  image:string
}

let bbc='메타테스트'

const Meta = ({ title, image }: MetaProps) => {
  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content='메타테스트' />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

export default Meta;