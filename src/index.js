import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './index.css';
import './styles/general.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
