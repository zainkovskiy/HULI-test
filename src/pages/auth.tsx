import React from 'react';
import styled from 'styled-components';
import AuthRight from 'components/AuthRight';
import AuthLeft from 'components/AuthLeft';
import { NextPage } from 'next';

const AuthStyle = styled.div`
  min-height: 100vh;
  display: flex;
  @media(max-width: 768px){
    flex-direction: column;
  }
`

const Auth: NextPage = () => {
  return (
    <AuthStyle>
      <AuthLeft/>
      <AuthRight/>
    </AuthStyle>
  );
};

export default Auth;