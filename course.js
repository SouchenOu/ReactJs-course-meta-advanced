// know we have access to a global variable called react DOM, so iam going to use that to render something to the screen

//JSX(Javascript xml)

/*******************************ReactDOM.render()****************************** */
ReactDOM.render(<h1>Hello react!</h1>, document.getElementById("id1")); // ReactDOM.render allows me to render something that looks very much like HTML, so i write between <h1></h1> what i want to render in the screen(Hello react!), exactly between the id="id1"
ReactDOM.render(<p>Hello from paragraph</p>, document.getElementById("id1"));
ReactDOM.render(<ul><li>Home</li><li>page1</li></ul>, document.getElementById("id2"));

/***********Challenge1: */

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

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
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