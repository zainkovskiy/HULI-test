import React from 'react';
import styled from 'styled-components';
import Card from 'components/Card';
import { NextPage } from 'next';

const CardsBox = styled.div`
  gap: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  grid-gap: 10px;
  @media(max-width: 768px){
    grid-template-columns: repeat(auto-fill,minmax(40%,1fr));
  }
  @media(max-width: 480px){
    grid-template-columns: repeat(auto-fill,minmax(100%,1fr));
  }
`

const Cards:NextPage = () => {
  return (
    <CardsBox>
      <Card title='3 года на рынке' text='Более 1000 разработанных ботов в РФ и зарубежом'/>
      <Card title='Честная цена' text='Оплата только за использованные минуты'/>
      <Card title='Скорость' text='Запускаем проекты за 3 недели, не теряя в качестве '/>
      <Card title='Личный кабинет' text='Отслеживание результатов звонков в личном кабинете'/>
    </CardsBox>
  );
};

export default Cards;