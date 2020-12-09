import React from 'react';

import Input from "../../components/Input";

import { Container, Imagem, Cover, Content, ContentBody  } from './styles';

import signInBackgroundImg from '../../assets/rawpixel-411166-unsplash@2x.png';


export default function SignUp() {
  return (
    <Container>
      <Cover>
        <Imagem src={signInBackgroundImg}/>
      </Cover>
      <Content>
        <h1>Criar meu cadastro</h1>
        <p>Para acompanhar sua contratação de crédito você utilizará seu e-mail e CPF.</p>
        <span >E-mail</span>
        <Input defaultValue={'Utilize seu melhor e-mail'}/>
        
        <ContentBody>
          <div>
            <span >CPF</span>
            <Input defaultValue={'998.767.888-70'}/>
          </div>
          <div>
            <span >Data de nascimento</span>
            <Input defaultValue={'dd/mm/aaaa'} />
          </div>
        </ContentBody>
        
        <span >Senha</span>
        <Input defaultValue={'Cadastre uma senha'} />
      </Content>
    </Container>
  );
}