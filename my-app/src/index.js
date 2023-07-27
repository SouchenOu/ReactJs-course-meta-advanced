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
// import Challenge13 from './challenge13';
// import Challenge14 from './challenge14';
// import Challenge15 from './challenge15';
// import Challenge16 from './challenge16';

import reportWebVitals from './reportWebVitals';
// import Challenge17 from './challenge17';
// import Challenge18 from './challenge18';
// import Challenge19 from './challenge19';
import MethodMap from './MethodMap';







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
    {/* <Challenge12/> */}
    {/* <Challenge13 /> */}
    {/* <Challenge15 /> */}
    {/* <Challenge14 /> */}
    {/* <Challenge16/> */}
    {/* <Challenge17 
      darkMode = {false} 
    /> */}
    {/* <Challenge18/> */}
    {/* <Challenge19 /> */}
    <MethodMap />



  </React.StrictMode>
);


reportWebVitals();
/************************ */



