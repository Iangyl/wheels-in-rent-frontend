import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './index.css';
import './styles/general.scss';
import './styles/selectSearch.scss';
import './styles/pagination.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from 'react-redux';
import {store, persistor} from './modules/storage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
