import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import App from './App';
 import Challenge2 from './challenge2';

import reportWebVitals from './reportWebVitals';


//This is a variable
const page = (
<div>
  <img src="./images/react-logo.png" alt="" width="40px"/>
  <h1>Fun facts about React</h1>
  <ul>
      <li>Was first </li>
      <li>Was second </li>
      <li>Was third </li>
  </ul>
</div>

)

const root = ReactDOM.createRoot(document.getElementById('root'));

//Method1
root.render(page); 

//Method2
root.render(
  <div>
    <img src="./images/react-logo.png" alt="" width="40px"/>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first </li>
      <li>Was second </li>
      <li>Was third </li>
      </ul>
  </div>)

 /*********************** */
root.render(
  <React.StrictMode>
    <App />
    <Challenge2 />
  </React.StrictMode>
);

/************************ */


reportWebVitals();
