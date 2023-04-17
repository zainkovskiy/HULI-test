import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import userLogo from 'public/images/Tabler.svg'
import CustomText from './CustomText';
import styled from 'styled-components';

const UserLogoStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`

const UserLogo: NextPage = () => {
  return (
    <UserLogoStyle>
      <CustomText color='#4F46E5' weight={500} td='underline'>John S.</CustomText> 
      <Image src={userLogo} alt='user-logo' width={26} height={26}/>
    </UserLogoStyle>
  );
};

export default UserLogo;