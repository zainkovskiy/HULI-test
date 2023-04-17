import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Logo from 'components/Logo';
import Nav from 'components/Nav';
import Button from 'components/Button';
import { NextPage } from 'next';
import { useAppSelector } from 'hooks/hooksRedux';
import { useCheckAuth } from 'hooks/hooks';
import { useEffect } from 'react';
import { useAppDispatch } from 'hooks/hooksRedux';
import { toggleAuth } from 'store/configSlice';
import UserLogo from './UserLogo';

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 768px){
    flex-wrap: wrap;
  }
`
const BoxOrder = styled.div`
  order: 3;
  @media (max-width: 768px){
    order: 2;
  }
`

const Header: NextPage = () => {
  const router = useRouter();
  const auth = useAppSelector((state) => state.config.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    new Promise<boolean>((res, rej) => {
      res(useCheckAuth());
    }).then((authAnswer) => {
      if (authAnswer) {
        auth !== authAnswer && dispatch(toggleAuth(authAnswer));
      }
    });
  }, [])
  const toAuthPage = () => {
    router.push('/auth');
  }
  return (
    <HeaderStyle>
      <Logo />
      {/* {
        !isTablet &&
      } */}
      <Nav />
      <BoxOrder>
        {
          auth ?
            <UserLogo /> :
            <Button onClick={toAuthPage} primary>Вход</Button>
        }
      </BoxOrder>
    </HeaderStyle>
  );
};

export default Header;