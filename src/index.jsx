import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './GlobalStyle.js';
import App from './App.jsx';

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
