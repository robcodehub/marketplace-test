import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './GlobalStyle.js';
import App from './App.jsx';
import reportWebVitals from './__tests__/reportWebVitals';

import { ListingsContextProvider } from './context/ListingsContext.jsx';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ListingsContextProvider>
      <App />
    </ListingsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
