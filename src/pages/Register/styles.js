import styled from 'styled-components';


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 728px;
`;

export const Cover = styled.div`

  width: 552px;
  height: 847px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0) 16%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.5) 69%, rgba(0, 0, 0, 0.8) 96%);
  background-size: cover;
`;

export const Imagem = styled.img`
  width: 100%;
`;