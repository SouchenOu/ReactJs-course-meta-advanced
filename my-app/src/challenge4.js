import {img} from "./images/react-img.png"

/*****************Build a React info site | parent/Child components*/

/*******
 * Mini Challenge
 * 
 * Move the 'header' element from Page into
 * 
 * it is own component called "Header"
 * 
 */



function Header()
{
    return (
        <header>
            <nav>
                <img src={img} alt="" width="20px" />
            </nav>
        </header>
    )
}

function Footer()
{
    return (
        <footer>
            <small>@2023 make from Morroco</small>
        </footer>
    )
}
function Challenge4()
{
    return (
        <div>
            <Header />
            <h1>Hello This is challenge4</h1>
            <ul>
                <li>This is 1</li>
                <li>This is 2</li>
                <li>This is 3</li>
                <li>This is 4</li>
            </ul>

          <Footer />
        </div>
    )
}


export default Challenge4;