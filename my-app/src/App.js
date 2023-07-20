import './App.css';

//********Challenge 1 */

/******
 * Challenge: find out what happens if we try to append JSX
 * to our div#root using .append() instead of ReactDOM
 * 
 * 1.Create a sample page in JSX (>= 4 elements) and save them in variable
 * 2.select the div with ID of "root" and use '.append()' to append your JSX
 * 3.See if you can guess what will show up in the browser before running the code
 * 4.See if you explain what actually shows up in the browser
 * 
 * 
 */

// why we use ReactDOM.render instead of just using the DOM append method

function App() {
  return (
    <div className="App">
      <h1>Hello souchen</h1>
        <div>
          <h1>My awsome website in react</h1>
          <h3>Reasons i love React</h3>
          <ul>
             <li>It's composable</li>
             <li>It's declarative</li>
             <li>It's a hireable skill</li>
             <li>It's a actively maintained by sli</li>
          </ul>
        </div>  
    </div>
  );
}

export default App;
