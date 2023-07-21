import img from "./images/react-logo.png"

//***********************Challenge3

/******
 * Add a 'header' element with a nested 'nav' element. Inside the 'nav' include a 'img' element with the image of the react logo inside (src="./react-logo.png")
 * 
 * and make sure to set the width to something more manageable so it doesnt take up the whole screen 
 * 
 * -Add an 'h1' with some text describing the page. (Reasons : I'm excited to learn React) .
 * Place it above the ordered list.
 * 
 * -Add a 'footer' after the list that says:
 * "20 xx <last name here> developement. all rights reserved."
 * 
 * 
 * 
 */


function Challenge3()
{
    return (
        <div>
            <header>
                <nav>
                    <img src={img} alt="" width="20px"/>
                </nav>
            </header>
            <ul>
                <li>The first one</li>
                <li>The second one</li>
                <li>The third one</li>
            </ul>
            <footer>
                <small>@ 2023 souchen developer. all rights reserved</small>
            </footer>
        </div>
    )
}


export default Challenge3;