import React from 'react';

import {Container, Content, Cover, Imagem} from './styles';

import signInBackgroundImg from '../../assets/rawpixel-411166-unsplash@2x.png';


export default function Register() {
  return (
    <Container>
      <Cover>
        <Imagem src={signInBackgroundImg}/>
      </Cover>
      <Content>

      </Content>
    </Container>
  );
}