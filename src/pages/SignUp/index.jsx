import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';

import {
  Container,
  Image,
  Text,
  Content,
  Header,
  Form,
  Title,
  ContentBody,
  AcceptTermsBox,
  Footer,
} from './styles';

export default function SignUp() {
  const handleSubmit = (event) => {
    // eslint-disable-next-line no-alert
    alert('Oi cara de boi');
    event.preventDefault();
  };
  return (
    <Container>
      <div className="image">
        <Image />
        <Text>
          <div>
            <q>
              Obtive crédito para capital de giro. O processo foi bem sucedido e
              tudo que foi abordado, foi cumprido.
            </q>
            <span>Camila Bragança,</span>
            <span>Sideral Tecnologia</span>
          </div>
        </Text>
      </div>
      <Content>
        <Header />
        <Form onSubmit={handleSubmit}>
          <Title>Criar meu cadastro</Title>
          <p>
            Para acompanhar sua contratação de crédito você utilizará seu e-mail
            e CPF.
          </p>
          <Input
            defaultValue="Utilize seu melhor e-mail"
            type="email"
            label="E-mail"
          />

          <ContentBody>
            <Input defaultValue="998.767.888-70" label="CPF" />
            <Input defaultValue="dd/mm/aaaa" label="Data de nascimento" />
          </ContentBody>

          <Input
            defaultValue="Cadastre uma senha"
            type="password"
            label="Senha"
            icon="BsFillEyeFill"
          />
          <AcceptTermsBox>
            <input type="checkbox" />
            <span>
              Li e estou de acordo com a
              <Link to="/"> Política de Privacidade </Link>e a
              <Link to="/"> Política de Uso de Informações</Link>
            </span>
          </AcceptTermsBox>

          <button type="submit">
            <span>Cadastrar</span>
          </button>

          <Footer>
            <span>
              Já fiz meu cadastro. <Link to="/">Entrar agora.</Link>
            </span>
          </Footer>
        </Form>
      </Content>
    </Container>
  );
}
