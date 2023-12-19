import React from 'react';
import styled from 'styled-components';



const Style=({ children })=> {
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