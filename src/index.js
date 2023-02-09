import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from './context'
import textData from './data/staticData/static.json'
import reportWebVitals from './reportWebVitals';
require('react-web-vector-icons/fonts');
console.log("TEXTDATA",textData.name)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider value={textData}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
