import React from 'react';
import styled from 'styled-components';
import CustomInput from 'components/CustomInput';
import Button from 'components/Button';
import CustomText from 'components/CustomText';
import CustomChexbox from 'components/CustomChexbox';
import CustomLink from './CustomLink';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IForm } from '../types/form-types';
import { readToken } from '../Api';
import { toggleAuth } from 'store/configSlice';
import { useAppDispatch } from 'hooks/hooksRedux';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const FormStyle = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 80px 0 0 0;
  @media(max-width: 1024px){
    margin: 40px 0 0 0;
  }
  @media(max-width: 480px){
    margin: 20px 0 0 0;
  }
`
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 0 16px 0;
  align-items: center;
`
const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Form: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = (data) => {
    readToken(data).then((responce) => {
      if (responce.statusText === 'OK') {
        localStorage.setItem('token', responce.token);
        dispatch(toggleAuth(true));
        router.push('/');
      }
    });
  }
  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <CustomText weight={500} size='28px' width='100%' m='0 0 32px 0'>Вход</CustomText>
      <BoxInput>
        <CustomInput
          register={register}
          name='email'
          type='email'
          placeholder='Email'
          error={errors.email ? true : false}
        />
        <CustomInput
          register={register}
          name='password'
          type='password'
          placeholder='Пароль'
          error={errors.password ? true : false}
        />
      </BoxInput>
      <Box>
        <CustomChexbox title='Запомнить меня' name='remember' />
        <CustomLink path='/' text='Забыли пароль?' color='#4F46E5' />
      </Box>
      <Button type='submit'>Войти</Button>
    </FormStyle>
  );
};

export default Form;