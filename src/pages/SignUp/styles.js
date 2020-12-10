import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/rawpixel-411166-unsplash.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Image = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0) 16%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.5) 69%, rgba(0, 0, 0, 0.8) 96%);
  }
`;

export const Text = styled.div`
  position: relative;

  div {
    position: absolute;
    bottom: 0;
    font-size: 20px;
    left: -286px;
    color: #fff;
    display: flex;
    text-align: right;
    flex-direction: column;
    margin: 0 40px 40px 0;

    span {
    }
  }

`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  width: 75%;
  background: #ccc;

  p {
    margin: 6px 12px 23px 0;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    color: #8F8F8F;
  }

  button {
    margin: 48px 0 0;
    width: 100%;
    height: 50px;
    border: 0;
    border-radius: 3px;
    background-color: #4c8afe;
    text-align: center;
    font-size: 16px;
    color: #fff;
    
    &:hover {
      background: ${shade(0.2, '#4c8afe')};
    }
  }
`;

export const Title = styled.h1`
  margin: 0 0 6px;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.25;
  text-align: center;
  color: #333333;
`;

export const ContentBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

export const AcceptTermsBox = styled.div`
  display: flex;
  align-items:center;
  background: #f5f5f5;
  border: solid 1px #e6e6e6;
  border-radius: 3px;
  padding: 7px 5px 9px 12px;

  p {
    margin: 0 0 0 12px;
    font-family: Arial;
    font-size: 12px;
    line-height: 1.67;

    a {
      text-decoration: none;
      color: #4c8afe;
    }
  }
`;

