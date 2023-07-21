import './index.css';
import img from "./images/react-logo.png";

/**********Build a React info site | styling with classes */

/****
 * Challenge
 * 
 * - Add an 'ul' inside the Header is 'nav' and create th following <li> is "pricing" , "About", "Contact"
 * 
 * 
 * function Header 
 * 
 * 
 */


/******
 * using flexbox, line up the nav items horizontally, and put them inline with the React logo
 * 
 * -Change the image styling to happen in css instead of in-line For practice, add a new class to the imege in order to style it
 * 
 */


function Header()
{
    return (
        <header>
            <nav className="nav">
                <img src={img} alt="" width="40px" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function Challenge5()
{
    return (
        <Header/>
    )
    
}


//exporting makes the file contents eligible for importing.
//The basic idea behind imports and exports is to exchange contents between several JavaScript files.
export default Challenge5;