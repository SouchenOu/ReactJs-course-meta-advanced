import img from "./images/react-logo.png"
import './style.css';
/*******
 * 
 * 
 * Build a React info site | styles and images with CRA
 */


/********
 * Create a 'components ' folder
 * 
 * Create the following components in separate files  inside
 * the components folder. In each one, just render an 'h1'
 * with the name of the component( e.g. return <h1> Navbar goes here </h1>):
 * 
 * -Navbar
 * -Main
 * 
 * Create an App component outside the components folder (sibling to the index.js file)
 * 
 * -Have App render the Navbar and Main components
 * -Import and render the App component inside of index.js using ReactDOM
 *      -At this point you should Have your 'Navbar goes here' etc.showing up in the mini-browser.
 * 
 * -Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
 * Put the links to thos fonts ABOVE the style.css link in index.html 
 * (Use the <link \> elements instead of the @import or
 * npm options for getting the fonts. You may need to do some
 *  extra research to figure out how this works if you havent done it before.)
 * 
 * 
 */


function Navbar()
{
    return (
        <nav className="Nav">
            <img src={img} alt="" width="20px" height="20px"/>
            <h3> ReactFacts</h3>
            <h4>React Course - Project1</h4>

        </nav>
    )
}

function Main()
{
    return (
        <div className="Main">
            <h1>Fun facts about React</h1>
            <ul className="mainFacts">
                <li>Was first released in 2013</li>
                <li>Was originally created by jordan walke</li>
                <li>Has well over 100k</li>
                <li>Is mantained by Facebook</li>
                <li>Powers thousands of entreprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}


function Challenge6()
{
    return (
        <div>
            <Navbar />
            <Main />
        </div>
        
    )
}

export default Challenge6;

