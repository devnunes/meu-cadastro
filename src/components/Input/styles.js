import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

// interface ContainerProps {
//   isFocused: boolean;
//   isFilled: boolean;
//   isErrored: boolean;
// }

export const Container = styled.div`
  background: #f5f5f5;
  padding: 18px 40px 18px 14px;
  width: 100%;
  border: solid 1px #e6e6e6;
  border-radius: 3px;
  margin: 9px 0 0;


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
    border: 0;
    background: transparent;
    &::placeholder {
      color: #666360;
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