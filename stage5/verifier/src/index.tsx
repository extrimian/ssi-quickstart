import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/AppContext';
import { DWN_URL, RESOLVER_URL } from './config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log(RESOLVER_URL);
console.log(DWN_URL);

root.render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
