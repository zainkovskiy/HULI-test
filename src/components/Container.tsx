import React from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';

const ContainerStyle = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 40px 40px 80px 40px;
  @media(max-width: 1024px){
    padding: 20px 20px 40px 20px;
  }
  @media(max-width: 480px){
    padding: 10px 10px 20px 10px;
  }
`
interface IContainer {
  children: React.ReactNode
}
const Container: NextPage<IContainer> = ({ children }) => {
  return (
    <ContainerStyle>
      {children}
    </ContainerStyle>
  );
};

export default Container;