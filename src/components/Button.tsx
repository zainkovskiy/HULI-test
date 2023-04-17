import React from 'react';
import { NextPage } from 'next';
import styled from 'styled-components';

type IButton = {
  children: string;
  p?: string;
  weight?: number;
  size?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}
type IButtonPrimary = IButton & {
  primary: boolean;
  secondary?: never;
}
type IButtonSecondary = IButton & {
  primary?: never;
  secondary?: boolean;
}
type IButtonProps = IButtonPrimary | IButtonSecondary;

interface IButtonStyle {
  primary?: boolean;
  secondary?: boolean;
  p?: string;
  weight?: number;
  size?: string;
}

const ButtonStyle = styled.button<IButtonStyle>`
  color: ${props => props.primary ? '#4F46E5' : '#fff'};
  font-weight: ${props => props.weight || '500'};;
  font-size: ${props => props.size || '16px'};
  padding: ${props => props.p || '12px 24px'};
  border-radius: 10px;
  border: 1px solid #4F46E5;
  background-color: ${props => props.primary ? '#fff' : '#4F46E5'};
  cursor: pointer;
  transition: color .3s, background-color .3s;
  font-family: 'Noto Sans', sans-serif;
  &:hover{
    color: ${props => props.primary ? '#fff' : '#4F46E5'};
    background-color: ${props => props.primary ? '#4F46E5' : '#fff'};
  }
`

const Button: NextPage<IButtonProps> = ({ children, primary, secondary, onClick, p, weight, size, type }) => {
  return (
    <ButtonStyle
      primary={primary}
      secondary={secondary}
      onClick={onClick}
      p={p}
      weight={weight}
      size={size}
      type={type}
    >
      {children}
    </ButtonStyle>
  );
};
``
export default Button;