import React from 'react';
import styled from 'styled-components';
import backgroud from 'public/images/background.png';
import { NextPage } from 'next';

const BackgroundStyle = styled.div`
  min-height: 100vh;
  background-image: url(${backgroud.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`
interface IBackground {
  children: React.ReactNode
}
const Background: NextPage<IBackground> = ({children}) => {
  return (
    <BackgroundStyle>{children}</BackgroundStyle>
  );
};

export default Background;