import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

interface ILink {
  path: string;
  text: string;
  color?: string;
}
interface ITextStyle {
  path: string;
  color?: string;
}

const LinkStyle = styled(Link) <ITextStyle>`
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  border-bottom: ${props => props.path === props.href ? '1px solid #4F46E5' : ''};
  color: ${props => props.color || '#000000'};
  font-family: 'Noto Sans', sans-serif;
  @media (max-width: 480px){
    font-size: 12px;
  }
`

const CustomLink: NextPage<ILink> = ({ path, text, color }) => {
  const router = useRouter();

  return (
    <LinkStyle href={path} path={router.pathname} 
    color={color}>
      {text}
    </LinkStyle>
  );
};

export default CustomLink;