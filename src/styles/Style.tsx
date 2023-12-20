import styled from 'styled-components';
import React, { ReactNode } from 'react';

interface StyleProps {
  children: ReactNode;
}

const Style:React.FC<StyleProps> =({ children })=> {
  return <LayoutStyle>{children}</LayoutStyle>;
}

export default Style;

const LayoutStyle = styled.div`
width:100vw;
height:100vh;
    display: flex;
  flex-direction: column;
  align-items: center;
`;