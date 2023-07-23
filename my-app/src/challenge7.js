import img from "./images/arbnb-logo.jpeg"
import './style2.css';
/***********Build an application---> Challenge7 */


function Navbar()
{
    return (
        <div>
            <nav className="Nav">
                <img className="nav--logo" src={img} alt=""/>
            </nav>
        </div>
    )
}




function Challenge7(){
    return (
        <Navbar />
    )
}


export default Challenge7;