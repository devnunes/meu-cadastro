import React from 'react';
import {  } from "react-icons/";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { Container, Imagem, Cover, Content, Form, Title, ContentBody } from './styles';

import signInBackgroundImg from '../../assets/rawpixel-411166-unsplash@2x.png';

export default function SignUp() {
  
  const handleSubmit = event =>{
    alert('Oi cara de boi');
    event.preventDefault();
  }
  return (
    <Container>
      <Cover>
        <Imagem src={signInBackgroundImg}/>
      </Cover>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Title>Criar meu cadastro</Title>
          <p>Para acompanhar sua contratação de crédito você utilizará seu e-mail e CPF.</p>
          <label >E-mail</label>
          <Input defaultValue={'Utilize seu melhor e-mail'}/>
          
          <ContentBody>
            <div>
              <label >CPF</label>
              <Input defaultValue={'998.767.888-70'}/>
            </div>
            <div>
              <label >Data de nascimento</label>
              <Input defaultValue={'dd/mm/aaaa'} />
            </div>
          </ContentBody>
          
          <label >Senha</label>
          <Input defaultValue={'Cadastre uma senha'} type="password" />

          <Button type="submit" > Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}