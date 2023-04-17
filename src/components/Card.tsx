import React from 'react';
import styled from 'styled-components';
import CustomText from 'components/CustomText';
import { NextPage } from 'next';

interface ICard {
  title: string;
  text: string;
} 
const CardStyle = styled.div`
  border-radius: 10px;
  border: 1px solid #E4E4E7;
  padding: 25px;
  background-color: #fff;
`
const Card:NextPage<ICard> = ({title, text}) => {
  return (
    <CardStyle>
      <CustomText size='20px' weight={600} color='#111827'>{title}</CustomText>
      <CustomText as='p' m='16px 0 0 0' weight={400} color='#3E3E3E'>{text}</CustomText>
    </CardStyle>
  );
};

export default Card;