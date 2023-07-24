import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//  import App from './App';
//  import Challenge2 from './challenge2';
//  import Challenge3 from './challenge3'
//import Challenge6 from './challenge6';
// import Challenge7 from './challenge7';
//import Challenge8 from './challenge8';
//  import Challenge9 from './challenge9';
// import Challenge5 from './challenge5';
// import Challenge11 from './challenge11';
// import Challenge12 from './challenge12';
import Challenge13 from './challenge13';
// import Challenge14 from './challenge14';
// import Challenge15 from './challenge15';

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
    {/* <Challenge6 /> */}
    {/* <Challenge5 /> */}
    {/* <Challenge3 />
    <App />
    <Challenge2 /> */}
    {/* <Challenge7 /> */}
    {/* <Challenge8 /> */}
    {/* <Challenge9 />
    <Challenge11 /> */}
    <Challenge13 />
    {/* <Challenge15 /> */}
    {/* <Challenge14 /> */}



  </React.StrictMode>
);


reportWebVitals();
/************************ */



