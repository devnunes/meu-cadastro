import styled, { css } from 'styled-components';
import { shade } from 'polished';

import px2vw from '../../utils/px2vw';

import signInBackgroundImg from '../../assets/background/rawpixel-411166-unsplash@3x.jpg';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }

  > div.image {
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
    bottom: ${px2vw(80)};
    left: -${px2vw(480)};
    color: #fff;
    display: flex;
    flex-direction: column;
    width: ${px2vw(440)};
    text-align: right;

    > q {
      font-size: 20px;
      margin-bottom: 8px;
    }

    > span {
      font-size: 16px;
      line-height: 1.5;
    }

    > span.name {
      font-weight: bold;
      margin-bottom: 4px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 1024px) {
    width: ${px2vw(900)};
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 65px;
  margin: 0 0 ${px2vw(250)};
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > svg {
    width: 75px;
    height: 24px;
    margin: 0 ${px2vw(40)} 0 0;
    ${(props) =>
      props.successSubmit &&
      css`
        display: none;
      `}
  }

  > div {
    display: none;
    width: 100%;
    height: 100%;
    background-color: #2ecc71;
    justify-content: center;
    align-items: center;

    > span {
      font-family: Arial;
      font-size: 16px;
      color: #fff;
    }
    ${(props) =>
      props.successSubmit &&
      css`
        display: flex;
      `}
  }

  @media (min-width: 1024px) {
    height: 56px;
    margin: 0 0 38px;
  }

  @media (max-width: 768px) {
    box-shadow: inset 0 -1px 0 0 #e6e6e6;
  }
`;

export const Form = styled.form`
  width: ${px2vw(1290)};

  @media (min-width: 1024px) {
    width: ${px2vw(400)};
  }

  > p {
    margin: 6px 12px 23px 0;
    font-size: 16px;
    line-height: 1.5;
    color: #8f8f8f;
  }

  > button {
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

  @media (min-width: 1024px) {
    text-align: center;
  }
`;

export const ContentBody = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    justify-content: space-between;
    > div {
      width: ${px2vw(180)};
    }
  }

  > input[type='date']::-webkit-calendar-picker-indicator,
  > input[type='date']::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
  }
`;

export const AcceptTermsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px 16px 16px;
  height: 92px;
  color: #8f8f8f;

  > input {
    transform: scale(1.85);
    padding: 10px;
  }

  > span {
    margin: 0 0 0 12px;
    font-family: Arial;
    font-size: 14px;
    line-height: 1.67;

    a {
      text-decoration: none;
      color: #4c8afe;
    }

    @media (min-width: 1024px) {
      font-size: 12px;
    }
  }

  @media (min-width: 1024px) {
    height: 56px;
  }
`;

export const Footer = styled.div`
  margin-top: ${px2vw(380)};
  height: 65px;
  border-top: 2px solid #e6e6e6;
  display: flex;
  justify-content: center;

  > span {
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

    @media (min-width: 1024px) {
      margin-top: 16px;
    }
  }

  @media (min-width: 1024px) {
    margin-top: 88px;
    height: 74px;
  }
`;
