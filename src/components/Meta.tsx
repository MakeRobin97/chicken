import { Helmet } from 'react-helmet-async';

interface MetaProps{
  title:string,
  image:string
}

const Meta = ({ title, image }: MetaProps) => {
  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content='궁금하지? 너와 어울리는 치킨' />
      <meta property="og:image" content={image} />
    </Helmet>
  );
};

export default Meta;