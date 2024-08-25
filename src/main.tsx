/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import styled, { createGlobalStyle } from 'styled-components';
import App from './App.tsx';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100vh;
    width: 100%;
  }
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledDiv>
      <GlobalStyle />
      <App />
    </StyledDiv>
  </StrictMode>
);
