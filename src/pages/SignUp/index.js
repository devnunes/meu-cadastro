import React from 'react';

import Input from "../../components/Input";
import Button from "../../components/Button";

import { 
  Container, 
  Image,
  Text,
  Content, 
  Form, 
  Title, 
  ContentBody,
  AcceptTermsBox 
} from './styles';

export default function SignUp() {
  
  const handleSubmit = event =>{
    alert('Oi cara de boi');
    event.preventDefault();
  }
  return (
    <Container>
      <Image />
      <Text>
        <div>
          <p>"Obtive crédito para capital de giro. O processo foi bem sucedido e 
            tudo que foi abordado, foi cumprido."</p>
          <span>Camila Bragança,</span>
          <span>Sideral Tecnologia</span>
        </div>
      </Text>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Title>Criar meu cadastro</Title>
          <p>Para acompanhar sua contratação de crédito você utilizará seu e-mail e CPF.</p>
          <Input defaultValue={'Utilize seu melhor e-mail'} type="email" label="E-mail" />
          
          <ContentBody>
              <Input defaultValue={'998.767.888-70'}  label="CPF" />
              <Input defaultValue={'dd/mm/aaaa'} label="Data de nascimento" />
          </ContentBody>
          
          <Input defaultValue={'Cadastre uma senha'} 
            type="password" 
            label="Senha" 
            icon="BsFillEyeFill"
            />
          <AcceptTermsBox>
            <input type="checkbox" ></input>
            <p>Li e estou de acordo com a <a href="#">Política de Privacidade </a> 
            e a <a href="#">Política de Uso de Informações</a> .</p>
          </AcceptTermsBox>

          <button type="submit" > <span>Cadastrar</span> </button>
        </Form>
      </Content>
    </Container>
  );
}