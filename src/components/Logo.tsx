import React from 'react';
import logo from 'public/images/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { NextPage } from 'next';

const Logo: NextPage = () => {
  return (
    <Link href='/'>
      <Image src={logo} alt='logo' />
    </Link>
  );
};

export default Logo;