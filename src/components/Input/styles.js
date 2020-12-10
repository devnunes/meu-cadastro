import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

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
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}
  
  input {
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
  svg {
    margin-right: 16px;
  }
  & + div {
    margin-top: 8px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #ff5863;
    color: #fff;
    &::before {
      border-color: #ff5863 transparent;
    }
  }
`;
