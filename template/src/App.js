/** @jsx jsx */
import logo from './logo.svg';
import { css, jsx, keyframes } from '@emotion/core';
import { useQuery, gql } from '@apollo/client';

const GET_WELCOME_MESSAGE = gql`
 {
   welcomeMessage @client
 }
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

function App() {
  const { data } = useQuery(GET_WELCOME_MESSAGE);
  return (
    <div css={css`
      text-align: center;
    `}>
      <header css={css`
          background-color: #282c34;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white;
      `}>
        <img src={logo} css={css`
            height: 40vmin;
            pointer-events: none;
            @media (prefers-reduced-motion: no-preference) {              
              animation: ${spin} infinite 20s linear;              
            }
        `} alt="logo" />
        <p>
          {data.welcomeMessage}
        </p>
        <a
          css={css`
            color: #61dafb;
          `}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
