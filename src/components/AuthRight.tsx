import React from 'react';
import { NextPage } from 'next'
import Image from 'next/image';
import call from 'public/images/Calls.png';
import dashbord from 'public/images/Dashboard.png';
import styled from 'styled-components';
import CustomText from './CustomText';

const ImageStyle = styled(Image)`
  width: 100%;
  height: 60%;
  object-fit: contain;
  object-position: top;
  filter: drop-shadow(0px 4px 32px #E8E7FF);
  border-radius: 8px;
`
const ImageTop = styled(ImageStyle)`
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row: 1;
`
const ImageBottom = styled(ImageStyle)`
  grid-row: 1;
  grid-column-start: 3;
  grid-column-end: 7;
  padding-top: 35%;
`
const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  position: relative;
`

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F3F3FF;
  padding: 76px;
  box-sizing: border-box;
  width: 55%;
  justify-content: center;
  @media(max-width: 1024px){
    width: 90%;
    padding: 2rem;
  }
  @media(max-width: 768px){
    width: 100%;
  }
  @media(max-width: 480px){
    padding: 10px 10px 20px 10px;
    min-height: 50vh;
  }
`

const AuthRight: NextPage = () => {
  return (
    <AuthContainer>
      <ImageContainer>
        <ImageTop src={call} alt='photo' />
        <ImageBottom src={dashbord} alt='photo' />
      </ImageContainer>
      <CustomText weight={700} color='#111827' size='20px' m='72px 0 12px 0' at='center'>Вся аналитика в одном кабинете</CustomText>
      <CustomText weight={400} color='#111827' size='16px' width='500px' at='center'>Теперь просматривать аналитику и создавать отчёты можно без нашей помощи</CustomText>
    </AuthContainer>
  );
};

export default AuthRight;