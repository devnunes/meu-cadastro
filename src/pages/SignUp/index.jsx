import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/Form';

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
  const {
    emailIsErrored,
    documentIsErrored,
    birthIsErrored,
    passwordIsErrored,
    email,
    document,
    birth,
    password,
    setError,
  } = useForm();
  const [successSubmit, setSuccessSubmit] = useState(false);

  const validateFormData = () => {
    const newState = {
      emailIsErrored: !/\S+@\S+\.\S+/.test(email),
      documentIsErrored: !/([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/.test(
        document,
      ),
      birthIsErrored: !/([0-9]{2}[/]?[0-9]{2}[/]?[0-9]{4})/.test(birth),
      passwordIsErrored: !/(^[a-zA-Z0-9_]{6,}$)/.test(password),
    };
    setError(newState);
    if (
      !newState.emailIsErrored &&
      !newState.documentIsErrored &&
      !newState.birthIsErrored &&
      !newState.passwordIsErrored
    ) {
      setSuccessSubmit(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateFormData();
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
            <span className="name">Camila Bragança,</span>
            <span>Sideral Tecnologia</span>
          </div>
        </Text>
      </div>
      <Content>
        <Header successSubmit={successSubmit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="24"
            viewBox="0 0 75 24"
          >
            <g fill="none" fillRule="nonzero">
              <path
                fill="#333"
                d="M73.687 20.715a.801.801 0 0 1-.792-.81V7.562c.001-.023.001-.045.003-.067a.808.808 0 0 1 .532-.7.826.826 0 0 1 .192-.04c.021-.002.043-.002.065-.003.022 0 .044.002.065.003l.066.007a.809.809 0 0 1 .659.732c.002.023.002.045.002.068v12.343a.8.8 0 0 1-.791.81h-.001zm.022-17.755c.45 0 .815.374.815.834 0 .46-.365.833-.815.833a.825.825 0 0 1-.815-.833c0-.46.365-.834.815-.834zM69.21 8.31v-4.6c.001-.024.001-.047.003-.07a.823.823 0 0 1 .229-.502.787.787 0 0 1 .491-.236c.023-.002.046-.002.07-.003l.068.003.069.01a.819.819 0 0 1 .197.063.807.807 0 0 1 .454.665c.002.023.002.046.003.07 0 3.146.01 6.294 0 9.44a7.913 7.913 0 0 1-.474 2.648 7.787 7.787 0 0 1-1.456 2.458 7.581 7.581 0 0 1-2.85 2.03 7.424 7.424 0 0 1-2.185.513 7.44 7.44 0 0 1-2.554-.245 7.457 7.457 0 0 1-2.466-1.213 7.723 7.723 0 0 1-2.854-4.266 7.944 7.944 0 0 1-.077-3.623 7.77 7.77 0 0 1 2.333-4.096 7.54 7.54 0 0 1 2.018-1.331 7.373 7.373 0 0 1 2.826-.642l.146-.003H63.344a7.407 7.407 0 0 1 4.854 1.854c.37.324.71.686 1.013 1.076zM63.27 7l-.136.002a5.9 5.9 0 0 0-1.085.122 5.852 5.852 0 0 0-1.64.612 6.056 6.056 0 0 0-1.523 1.21 6.15 6.15 0 0 0-1.554 3.415 6.287 6.287 0 0 0 .063 1.895 6.153 6.153 0 0 0 1.954 3.457 5.862 5.862 0 0 0 6.58.837 5.971 5.971 0 0 0 1.193-.813 6.125 6.125 0 0 0 2.073-4.205c.01-.145.014-.288.015-.433v-.762a6.148 6.148 0 0 0-.367-1.472 6.148 6.148 0 0 0-1.514-2.254 5.939 5.939 0 0 0-2.054-1.266A5.824 5.824 0 0 0 63.293 7h-.023zM47.356 5.38h.092a7.388 7.388 0 0 1 1.796.234c.06.015.129.042.204.08a7.508 7.508 0 0 1 2.766 1.54 7.738 7.738 0 0 1 1.877 2.477 7.846 7.846 0 0 1 .764 3.24l.001.1c0 .047 0 .094-.005.141a.819.819 0 0 1-.209.463.795.795 0 0 1-.668.25c-.036.005-.05.004-.092.006H45.22c-.047-.002-.058 0-.103-.008a.79.79 0 0 1-.629-.493.827.827 0 0 1 .25-.953.78.78 0 0 1 .43-.165c.017 0 .034 0 .052-.002h8a6.148 6.148 0 0 0-.361-1.425 6.148 6.148 0 0 0-1.515-2.254 5.944 5.944 0 0 0-2.053-1.265A5.833 5.833 0 0 0 47.336 7a5.852 5.852 0 0 0-3.148.96c-.584.384-1.101.87-1.523 1.434a6.158 6.158 0 0 0-1.228 3.705 6.157 6.157 0 0 0 .998 3.379c.399.61.904 1.146 1.485 1.575a5.902 5.902 0 0 0 1.954.946 5.875 5.875 0 0 0 2.655.09 5.867 5.867 0 0 0 2.855-1.454c.101-.093.199-.19.294-.29l.025-.028.028-.029.045-.045c.016-.014.032-.029.05-.042a.778.778 0 0 1 1.047.081.817.817 0 0 1 .172.848.8.8 0 0 1-.126.226c-.023.03-.047.055-.072.082l-.098.104a7.565 7.565 0 0 1-1.804 1.373 7.422 7.422 0 0 1-5.249.708 7.427 7.427 0 0 1-2.325-.996 7.646 7.646 0 0 1-1.793-1.617 7.807 7.807 0 0 1-1.722-5.06 7.783 7.783 0 0 1 1.721-4.761c.423-.523.914-.99 1.455-1.384a7.443 7.443 0 0 1 3.407-1.364c.275-.036.55-.055.828-.06h.001l.088-.002zM32.073 5.924l.003-.067a.814.814 0 0 1 .532-.7.817.817 0 0 1 .191-.04l.066-.003.065.003.066.009a.807.807 0 0 1 .659.731l.001.067V8.37a7.647 7.647 0 0 1 1.706-1.643 7.43 7.43 0 0 1 3.296-1.285c.302-.039.607-.058.91-.062.047 0 .047 0 .093.002a.732.732 0 0 1 .137.02.797.797 0 0 1 .589.599.817.817 0 0 1-.161.708.79.79 0 0 1-.56.29c-.032.002-.055 0-.087.002h-.077c-.052.002-.103.003-.153.006a5.835 5.835 0 0 0-3.604 1.458 6.11 6.11 0 0 0-1.751 2.61 6.157 6.157 0 0 0-.338 2.026v6.91c-.002.06 0 .074-.01.133a.813.813 0 0 1-.245.463.79.79 0 0 1-.666.203.79.79 0 0 1-.406-.203.812.812 0 0 1-.253-.53c-.002-.022-.002-.044-.003-.067V5.924zM24.805 5.38a7.395 7.395 0 0 1 4.258 1.382 7.614 7.614 0 0 1 1.01.864l.031.031c.039.043.05.052.083.1a.823.823 0 0 1-.318 1.212.778.778 0 0 1-.912-.194c-.025-.026-.05-.052-.077-.077a6.078 6.078 0 0 0-.963-.769 5.875 5.875 0 0 0-1.774-.763 5.869 5.869 0 0 0-2.442-.07 5.862 5.862 0 0 0-2.156.866c-.583.382-1.1.87-1.522 1.432a6.147 6.147 0 0 0-1.228 3.707 6.147 6.147 0 0 0 .998 3.378c.398.61.904 1.146 1.485 1.575a5.89 5.89 0 0 0 1.953.945 5.871 5.871 0 0 0 2.656.092 5.867 5.867 0 0 0 2.855-1.456c.1-.093.198-.19.293-.29l.026-.027.027-.029.046-.045c.017-.014.032-.029.05-.042a.78.78 0 0 1 1 .036.813.813 0 0 1 .269.638.829.829 0 0 1-.176.48c-.023.03-.047.056-.072.083l-.099.103a7.657 7.657 0 0 1-1.804 1.373c-.42.23-.862.419-1.317.563a7.42 7.42 0 0 1-3.931.145 7.425 7.425 0 0 1-2.325-.995 7.657 7.657 0 0 1-1.793-1.617 7.782 7.782 0 0 1-1.342-2.48 7.9 7.9 0 0 1 .03-4.95 7.779 7.779 0 0 1 1.4-2.497 7.67 7.67 0 0 1 1.366-1.279 7.371 7.371 0 0 1 4.318-1.426l.097.001z"
              />
              <path
                fill="#FFC400"
                d="M3.752 23.869l.016-1.227s3.483.016 5.932 0c.182-.004.364-.015.545-.04.4-.052.794-.159 1.166-.32a4.373 4.373 0 0 0 1.295-.866c.19-.182.363-.38.52-.593a5.181 5.181 0 0 0 .966-2.713 5.286 5.286 0 0 0-.033-1.071 4.956 4.956 0 0 0-1.28-2.703 4.833 4.833 0 0 0-1.449-1.066 4.699 4.699 0 0 0-2.032-.46l-.072-.004c-.063-.012-.08-.012-.14-.036a.602.602 0 0 1-.234-.167.62.62 0 0 1-.145-.332 1.135 1.135 0 0 1-.005-.137.61.61 0 0 1 .15-.405.6.6 0 0 1 .374-.203c.05-.007.089-.005.138-.006.054 0 .07-.001.124-.003.06-.003.122-.006.184-.011a4.696 4.696 0 0 0 1.606-.42 4.865 4.865 0 0 0 1.873-1.542c.338-.461.595-.983.756-1.536a5.035 5.035 0 0 0-.135-3.205 4.955 4.955 0 0 0-.954-1.546 4.84 4.84 0 0 0-1.488-1.11 4.707 4.707 0 0 0-1.966-.458c-1.18-.008-4.53-.022-5.712 0a2.227 2.227 0 0 0-.724.143c-.37.141-.7.383-.95.695A2.314 2.314 0 0 0 1.57 3.95V23.868H.37c0-5.282-.095-14.696.001-19.977a3.651 3.651 0 0 1 .245-1.219c.184-.468.465-.894.822-1.241A3.445 3.445 0 0 1 2.61.682a3.44 3.44 0 0 1 1.113-.22C4.919.44 8.283.454 9.48.462a5.879 5.879 0 0 1 2.191.454 6.063 6.063 0 0 1 2.54 2.013 6.193 6.193 0 0 1 1.192 3.833 6.182 6.182 0 0 1-1.558 3.971 6.082 6.082 0 0 1-1.891 1.432l.18.09c.343.183.67.394.973.639a6.162 6.162 0 0 1 2.25 4.05c.047.389.058.78.036 1.171a6.582 6.582 0 0 1-.588 2.389 6 6 0 0 1-1.277 1.805 5.586 5.586 0 0 1-1.65 1.102 5.56 5.56 0 0 1-2.163.457c-2.459.017-5.963.001-5.963.001z"
              />
            </g>
          </svg>
          <div>
            <span>Parabéns! Cadastro realizado com sucesso!</span>
          </div>
        </Header>
        <Form onSubmit={handleSubmit}>
          <Title>Criar meu cadastro</Title>
          <p>
            Para acompanhar sua contratação de crédito você utilizará seu e-mail
            e CPF.
          </p>
          <Input
            placeholderProps="Utilize seu melhor e-mail"
            label="E-mail"
            name="email"
            error={emailIsErrored}
            errorMessage="O campo email é obrigatório"
          />

          <ContentBody>
            <Input
              placeholderProps="998.767.888-70"
              label="CPF"
              name="document"
              error={documentIsErrored}
            />
            <Input
              placeholderProps="dd/mm/aaaa"
              name="birth"
              label="Data de nascimento"
              error={birthIsErrored}
            />
          </ContentBody>

          <Input
            placeholderProps="Cadastre uma senha"
            type="password"
            name="password"
            label="Senha"
            icon="BsFillEyeFill"
            error={passwordIsErrored}
          />
          <AcceptTermsBox>
            <input type="checkbox" required />
            <span>
              Li e estou de acordo com a
              <Link to="/"> Política de Privacidade </Link>e a
              <Link to="/"> Política de Uso de Informações</Link>.
            </span>
          </AcceptTermsBox>

          <button type="submit">
            <span>Cadastrar</span>
          </button>

          <Footer>
            <span>
              Já fiz meu cadastro. <Link to="/">Entrar agora</Link>.
            </span>
          </Footer>
        </Form>
      </Content>
    </Container>
  );
}
