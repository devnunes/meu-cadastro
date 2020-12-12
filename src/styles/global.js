import { createGlobalStyle } from 'styled-components/';
import px2vw from '../utils/px2vw';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    user-select: none;
  }

  :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
  
  body {
    -webkit-font-smoothing: antialiased !important;
    letter-spacing: normal;
  }

  body, input, button{
    font: 16px Arial, sans-serif;
  }

  #root {
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
