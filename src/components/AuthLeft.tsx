import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo';
import Form from 'components/Form';
import { NextPage } from 'next';

const AuthLeftStyle = styled.div`
  background-color: #FAFAFB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  @media(max-width: 1024px){
    width: 100%;
  }
  @media(max-width: 480px){
    min-height: 50vh;
  }
`
const ContextContainer = styled.div`
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  @media(max-width: 480px){
    padding: 10px 10px 20px 10px;
  }
`
const ContextWrap = styled.div`
  margin: 0 auto;
  max-width: 400px;
`

const AuthLeft: NextPage = () => {
  return (
    <AuthLeftStyle>
      <ContextContainer>
        <ContextWrap>
          <Logo />
          <Form />
        </ContextWrap>
      </ContextContainer>
    </AuthLeftStyle>
  );
};

export default AuthLeft;