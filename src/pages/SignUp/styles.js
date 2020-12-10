import styled from 'styled-components';
import { shade } from 'polished';

import px2vw from '../../utils/px2vw';

import signInBackgroundImg from '../../../public/assets/rawpixel-411166-unsplash@3x.jpg';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 100%;
  height: 100vh;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }

  div.image {
    display: flex;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Image = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
  position: relative;

  width: ${px2vw(550)};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0) 16%,
      rgba(0, 0, 0, 0) 42%,
      rgba(0, 0, 0, 0.5) 69%,
      rgba(0, 0, 0, 0.8) 96%
    );
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
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 360px;
  height: 64px;
  margin: 0 0 84px;
  padding: 20px 32px 20px 24px;
  box-shadow: inset 0 -1px 0 0 #e6e6e6;
`;

export const Form = styled.form`
  width: ${px2vw(1290)};

  p {
    margin: 6px 12px 23px 0;
    font-size: 16px;
    line-height: 1.5;
    color: #8f8f8f;
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
  text-align: left;
  color: #333333;
`;

export const ContentBody = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AcceptTermsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  border: solid 1px #e6e6e6;
  border-radius: 3px;
  padding: 16px 24px 16px 16px;
  height: ${px2vw(350)};

  span {
    margin: 0 0 0 12px;
    font-family: Arial;
    font-size: 14px;
    line-height: 1.67;

    a {
      text-decoration: none;
      color: #4c8afe;
    }
  }
`;

export const Footer = styled.div`
  margin-top: ${px2vw(380)};
  height: ${px2vw(250)};
  border-top: 2px solid #e6e6e6;
  display: flex;
  justify-content: center;

  span {
    /* : 18px; */
    margin: ${px2vw(85)} 0 0;
    font-family: Arial;
    font-size: 14px;
    line-height: 1.29;
    text-align: center;
    color: #8f8f8f;

    > a {
      text-decoration: none;
      color: #4c8afe;
    }
  }
`;
