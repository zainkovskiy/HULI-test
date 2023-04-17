import React from 'react';
import styled from 'styled-components';
// import myFont from 'public/fonts/font_config';
import { NextPage } from 'next';

type IText = {
  weight?: number;
  width?: string;
  children: string;
  as?: React.ElementType;
  color?: string;
  m?: string;
  size?: string;
  align?: string;
  at?: string;
  td?: string;
}

interface ITextStyle {
  weight?: number;
  width?: string;
  color?: string; 
  m?: string;
  size?: string;
  align?: string;
  at?: string;
  td?: string;
}

const TextStyle = styled.span<ITextStyle>`
  font-weight: ${props => props.weight || 400};
  color: ${props => props.color || '#000000'};
  margin: ${props => props.m || 0};
  font-size: ${props => props.size || '16px'};
  max-width: ${props => props.width};
  align-self: ${props => props.align};
  text-align: ${props => props.at};
  text-decoration: ${props => '1px ' + props.td};
  text-underline-offset: 2px;
  font-family: 'Noto Sans', sans-serif;
`

const CustomText: NextPage <IText> = ({ children, weight, as, color, m, size, width, align, at, td }) => {  
  return (
    <TextStyle as={as} 
    weight={weight} color={color} m={m} size={size} width={width} align={align} at={at} td={td}>
      {children}
    </TextStyle>
  );
};


export default CustomText;