import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//  import App from './App';
//  import Challenge2 from './challenge2';
//  import Challenge3 from './challenge3'
 import Challenge5 from './challenge5';

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

//Method1 ---> use a variable
root.render(page); 

//Method2---> put the code directly
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

//Method3 ---> Using a function 'we should always capitalies the first name of a function '
function Temporary()
{
  return (
    <div>
      <img src="./images/react-logo.png" alt="" width="40px"/>
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first </li>
        <li>Was second </li>
        <li>Was third </li>
        </ul>
    </div>
  );
}
root.render(Temporary());

/********************************** */
root.render(
  <React.StrictMode>
    <Challenge5 />
    {/* <Challenge3 />
    <App />
    <Challenge2 /> */}
  </React.StrictMode>
);

/************************ */


reportWebVitals();
