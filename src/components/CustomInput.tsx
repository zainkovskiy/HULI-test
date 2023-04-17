import React, { useState, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
// import myFont from 'public/fonts/font_config';
import eye from 'public/images/icon_eye.svg';
import eye_check from 'public/images/icon-eye_check.svg';
import Image from 'next/image';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { IForm } from '../types/form-types';
import { NextPage } from 'next';

interface InputStyleProps {
  error: boolean;
}

const InputStyle = styled.input<InputStyleProps>`
  background: #FFFFFF;
  border: 1px solid ${props => props.error ? 'red' : '#E4E4E7'};
  outline: 1px solid transparent;
  border-radius: 10px;
  padding: 12px 16px;
  width: 100%;
  box-sizing: border-box;
  transition: border .3s;
  &:focus{
    outline: 1px solid ${props => props.error ? 'red' : '#4F46E5'};
    border: 1px solid ${props => props.error ? 'red' : '#4F46E5'};
  }
`
const InputContainer = styled.div`
  position: relative;
`
const IconStyle = styled(Image)`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
  height: 14px;
  width: 20px;
  object-fit: cover;
  font-family: 'Noto Sans', sans-serif;
  `
interface IFormInput extends IForm, FieldValues{};
interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | undefined;
  icon?: React.ReactNode;
  name: string;
  error?: boolean;
  register: UseFormRegister<IFormInput>;
}

const CustomInput: NextPage<IInput> = ({ placeholder, type, name, register, error }) => {
  const [currentType, setCurrentType] = useState(type);

  const toggleType = () => {
    setCurrentType(currentType === type ? 'text' : 'password');
  }
  return (
    <InputContainer>
      <InputStyle
        placeholder={placeholder}
        type={currentType}
        {...register(name, {required: true})}
        error={error || false}
        autoComplete={type === 'password' ? 'current-password' : 'off'}
      />
      {type === 'password' && <IconStyle src={currentType === 'password' ? eye : eye_check} alt='icon' onClick={toggleType}/>}
    </InputContainer>
  );
};

export default CustomInput;