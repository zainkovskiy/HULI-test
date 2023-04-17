import React from 'react';
import Header from 'components/Header';
import Container from 'components/Container';
import Background from 'components/Background';
import ChartLine from 'components/ChartLine';
import ChartVertical from 'components/ChartVertical';
import styled from 'styled-components';
import CustomText from 'components/CustomText';
import { NextPage } from 'next';

const ChartsContainer = styled.div`
  display: flex;
  gap: 30px;
  @media(max-width: 767px){
    flex-wrap: wrap;
  }
`
const BoxContainer = styled.div`
  display: flex;
  gap: 30px;
  margin: 140px 0 0 0;
  @media(max-width: 768px){
    flex-wrap: wrap;
    margin: 70px 0 0 0;
  }
  @media(max-width: 480px){
    gap: 1rem;
    margin: 35px 0 0 0;
  }
`
const TextStyle = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #3E3E3E;
  max-width: 520px;
  margin: 90px 0 70px 0;
  font-family: 'Noto Sans',sans-serif;
  @media(max-width: 768px){
    max-width: 100%;
    margin: 45px 0 35px 0;
  }
  @media(max-width: 480px){
    max-width: 100%;
    margin: 20px 0 15px 0;
  }
`
const TitleStyle = styled.h2`
  font-weight: 700;
  margin: 0;
  font-size: 48px;
  font-family: 'Noto Sans', sans-serif;
  @media(max-width: 768px){
    font-size: 32px;
  }
`
const Charts: NextPage = () => {
  return (
    <Background>
      <Container>
        <Header />
        <BoxContainer>
          <TitleStyle>Вся аналитика в одном кабинете</TitleStyle>
          <CustomText weight={400} size='20px' color='#3E3E3E' align='end'>Отслеживайте работу голосового ассистента в личном кабинете</CustomText>
        </BoxContainer>
        <TextStyle>Уникальные виджеты позволяют настроить дашборд под задачи различных подразделений вашей компании</TextStyle>
        <ChartsContainer>
          <ChartLine />
          <ChartVertical />
        </ChartsContainer>
      </Container>
    </Background>
  );
};

export default Charts;