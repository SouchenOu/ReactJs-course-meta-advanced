// know we have access to a global variable called react DOM, so iam going to use that to render something to the screen

//JSX(Javascript xml)

/*******************************ReactDOM.render()****************************** */
ReactDOM.render(<h1>Hello react!</h1>, document.getElementById("id1")); // ReactDOM.render allows me to render something that looks very much like HTML, so i write between <h1></h1> what i want to render in the screen(Hello react!), exactly between the id="id1"
ReactDOM.render(<p>Hello from paragraph</p>, document.getElementById("id1"));
ReactDOM.render(<ul><li>Home</li><li>page1</li></ul>, document.getElementById("id2"));

/***********Challenge1: ****************************/

/**Create your own custom React component!
 * call it "MainContent", and have it return a simple
 * h1 element that says "Im learning React!"
 * 
 * Afterward, render it below the navbar (which you can do inside the ReactDOM.render call below)
 * 
 * 
 */


function Navbar()
{
    return(

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}


function MainContent()
{
    return (<h1>I'm learning react</h1>);
}

ReactDOM.render(<div><Navbar/><MainContent/></div>, document.getElementById("navbar"));

/***********challenge 2************** */

/*****challenge - recreate the above line of code in vanilla JS by creating and appending an h1 to our div#root (without using innerHTML) */

/*****
 * - Create a new h1 element
 * Give it some textContent
 * Give it a class name of "header"
 * append it as a child of div#root
 * 
 * 
 */

// Method1
/**Regular DOM elements */
const h1 = document.createElement("h1");
h1.textContent = "Hello souchen lets learn react";
h1.className = "header";
document.getElementById("root").append(h1);
//Method2

ReactDOM.render(<h1 className="header">Hello souchen let's learn ReactJs</h1>, document.getElementById("root"));

/*****************Build a React info site JSX********************** */
//JSX is sort of  a flavor of javascript that looks a lot like html

ReactDOM.render(<h1 className="header">This is JSX</h1>, document.getElementById("root"));

//****************Method 1
ReactDOM.render(
<div>
    <h1 className="header">Salue soukaina</h1>
    <p>This is your paragraph</p>
</div>,
 document.getElementById("Test1"));

 // ********METHOD 2

 let page = (
    <div>
        <h1 className="header">This is another example</h1>
        <p>This is another paragraph</p>
    </div>
 )

 ReactDOM.render(page, document.getElementById("Test1"));

 /******************Challege 3 */
 /******
  * Create a navbar in JSX
  * --Use the semantic 'nav' element as the parent wrapper
  * --Have an h1 element with the brand name of your "website"
  * --Insert an unordered list for the other nav elements
  *  -Inside the 'ul' , have three 'li' for "Pricing", "about" , and "Contact"
  * -Dont worry about styling yet - it' ll just be plain-looking HTML for now
  * 
  * 
  */


 const navbar = (
    <nav>
        <h1>Souchen is Navbar</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
 )

 ReactDOM.render(navbar, document.getElementById("Test1"));

