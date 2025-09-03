import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const GlobalStyled = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;}
  
  html, body {
  scroll-behavior: smooth;
  line-height: 1.6;
  background-color: #f8f9fa;

  .container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 3rem;}

  ul {list-style: none;}

  h1, h2, h3, h4 {
  font-family: 'Fraunces';
  font-weight: 400;}

  p {
  color: black;
  font-size: 1.1rem;
  font-family: 'Lato';
  line-height: 1.8;
  font-weight: 300;
  text-align: left;}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
