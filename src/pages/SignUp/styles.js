import styled from 'styled-components';


export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Imagem = styled.img`
  width: 100%;
`;

export const Cover = styled.div`
  width: 552px;
  height: 847px;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0) 16%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.5) 69%, rgba(0, 0, 0, 0.8) 96%);
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Form = styled.form`
  width: 320px;

  p {
    margin: 6px 12px 0;
    font-family: Arial;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #8F8F8F;
  }
  span {
    margin: 0 280px 7px 0;
    font-family: Arial;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    color: #8F8F8F;
  }

`;

export const Title = styled.h1`
    text-align: center;
    margin: 0 0 6px;
    font-family: Arial;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: center;
    color: #333333;
`;

export const ContentBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  > div {
    display: flex;
    flex-direction: column;

    > span {
      width: 100%;
    }
  }
`;

