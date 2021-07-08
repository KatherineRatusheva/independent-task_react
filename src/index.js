import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppButton from './AppButton';
import AppPizza from './AppPizza';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppButton />
    <AppPizza />
  </React.StrictMode>,
  document.getElementById('root')
);