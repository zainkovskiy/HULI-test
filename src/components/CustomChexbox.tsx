import React, { useState } from 'react';
import styled from 'styled-components';
// import myFont from 'public/fonts/font_config';
import { NextPage } from 'next';

interface IChekbox {
  name: string;
  title?: string
}

const CustomChekboxStyle = styled.span`
    width: 24px;
    height: 24px;
    background: #FFFFFF;
    border: 1px solid #E4E4E7;
    border-radius: 4px; 
    display: inline-block;
`
const ChekboxStyle = styled.input`
  display: none;
  &:checked + ${CustomChekboxStyle}{
    background: #E4E4E7;
  }
`
const LabelStyle = styled.label`
  display: flex;
  gap: 12px;
  color: ##111827;
  align-items: center;
  cursor: pointer;
  font-family: 'Noto Sans', sans-serif;
`

const CustomChexbox: NextPage<IChekbox> = ({ name, title }) => {
  const [checked, setChecked] = useState(false);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setChecked(e.target.checked);
  }
  return (
    <LabelStyle 
     htmlFor={name}>
      <ChekboxStyle id={name} name={name} type="checkbox" checked={checked} onChange={handleChange} />
      <CustomChekboxStyle />
      {title}
    </LabelStyle>
  );
};

export default CustomChexbox;