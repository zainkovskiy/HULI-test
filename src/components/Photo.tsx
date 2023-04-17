import React from 'react';
import Image from 'next/image';
import photo from '../public/images/pexels-tim.jpeg';
import styled from 'styled-components';
import { NextPage } from 'next';

const PhotoStyle = styled(Image)`
  object-fit: cover;
  object-position: top;
  border-radius: 10px;
  position: absolute;
  top: 40px;
  left: 40px;
  @media(max-width: 1024px){
    width: 250px;
    height: 350px;
  }
  @media(max-width: 767px){
    display: none;
  }
`
const PhotoStyleTest = styled(PhotoStyle)`
  position: relative;
  top: auto;
  left: auto;
  visibility: hidden;
`

const PhotoContainer = styled.div`
  background-color: rgba(79, 70, 229, 0.2);
  border-radius: 10px;
  position: relative;
  height: 100%;
`

const Photo: NextPage = () => {
  return (
    <PhotoContainer>
      <PhotoStyleTest src={photo.src} alt='photo' height={532} width={450} />
      <PhotoStyle src={photo.src} alt='photo' height={532} width={450} />
    </PhotoContainer>
  );
};

export default Photo;