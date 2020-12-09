import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin: 48px 0 0;
  padding: 14px 10px;
  border-radius: 3px;
  background-color: #4c8afe;
  transition: background-color 0.2s;
  
  &:hover {
    background: ${shade(0.2, '#4c8afe')};
  }
`;