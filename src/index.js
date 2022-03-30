import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import {Provider} from "react-redux"
import Reducers from "./reducers/Reducers"




ReactDOM.render(
  <React.StrictMode>
   
      <App />
  
  </React.StrictMode>,
  document.getElementById('root')
);


