import React from 'react';
import styled from 'styled-components';
import CustomLink from 'components/CustomLink';
import { NextPage } from 'next';

const NavStyle = styled.nav`
  display: flex;
  gap: 60px;
  order: 2;
  @media (max-width: 1024px){
    gap: 1.5rem;
  }
  @media (max-width: 768px){
    gap: 1rem;
    order: 3;
    width: 100%;
  }
`

const Nav: NextPage = () => {
  return (
    <NavStyle>
      <CustomLink
        path='/about'
        text='О нас'
      />
      <CustomLink
        path='/charts'
        text='Платформа'
      />
      <CustomLink
        path='/portfolio'
        text='Портфолио'
      />
      <CustomLink
        path='/contact'
        text='Контакты'
      />
    </NavStyle>
  );
};

export default Nav;