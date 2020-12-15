import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  line-height: 1.29;
  color: #8f8f8f;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  border: solid 1px #e6e6e6;
  border-radius: 3px;
  margin: 9px 0 35px 0;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #ff5863;
      margin: 9px 0 0px 0;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #4c8afe;
      border-color: #4c8afe;
    `}
  
  > input {
    flex: 1;
    padding: 18px 0px 18px 14px;
    border: 0;
    background: transparent;
    font-size: 16px;
    width: 100%;

    &::placeholder {
      color: #cccccc;
    }
  }

  > svg {
    margin-right: 16px;
    color: #8f8f8f !important;
  }

  & + div {
    margin-top: 8px;
  }
`;

export const Error = styled.span`
  color: #ff5863;
  font-size: 14px;
  display: none;
  margin: 5px 0 0;
  ${(props) =>
    props.isErrored &&
    css`
      display: block;
      height: 30px;
    `}
`;
