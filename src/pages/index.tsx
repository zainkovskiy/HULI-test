import Header from 'components/Header';
import Container from 'components/Container';
import Background from 'components/Background';
import Button from 'components/Button';
import Photo from 'components/Photo';
import Cards from 'components/Cards';
import styled from 'styled-components';
import { NextPage } from 'next';

const BoxStyle = styled.div`
  display: flex;
  gap: 80px;
  margin: 135px 0 120px 0;
  @media(max-width: 1024px){
    gap: 20px;
    margin: 70px 0 60px 0;
  }
  @media(max-width: 767px){
    gap: 0;
    margin: 40px 0;
  }
  @media(max-width: 480px){
    margin: 30px 0;
  }
`
const BoxTextStyle = styled.div`
  @media(max-width: 480px){
    display: flex;
    flex-direction: column;
  }
`
const TitleStyle = styled.h1`
  font-weight: 700;
  color: ${props => props.color || '#000000'};
  margin: 0;
  font-size: 64px;
  font-family: 'Noto Sans', sans-serif;
  @media(max-width: 768px){
    font-size: 32px;
  }
`
const TextStyle = styled.h1`
  font-weight: 400;
  color: '#3E3E3E';
  margin: 0;
  font-size: 24px;
  font-family: 'Noto Sans', sans-serif;
  max-width: 650px;
  margin: 50px 0 60px 0;
  @media(max-width: 768px){
    margin: 25px 0 30px 0;
  }
  @media(max-width: 480px){
    font-size: 18px;
  }
`

const HomePage: NextPage = () => {
  return (
    <Background>
      <Container>
        <Header />
        <BoxStyle>
          <BoxTextStyle>
            <TitleStyle>Голосовые ассистенты</TitleStyle>
            <TitleStyle color='#4F46E5'>SmartDialogs</TitleStyle>
            <TextStyle>
              В звонках бот ведёт осмысленный диалог и совершенно неотличим от живого оператора. Автоматизируйте телефонные звонки с помощью ИИ.
            </TextStyle>
            <Button secondary p="18px 60px" weight={600} size='20px'>Оставить заявку</Button>
          </BoxTextStyle>
          <Photo />
        </BoxStyle>
        <Cards />
      </Container>
    </Background>
  )
}

export default HomePage