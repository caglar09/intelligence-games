import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/css/bootswatch-bootstrap.min.css'
import './index.scss';
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <React.Fragment>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);
