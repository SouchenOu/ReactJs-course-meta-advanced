import img from "./images/arbnb-logo.jpeg"
import './style2.css';
import img1 from "./images/grid-pic.jpeg";
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

function Hero()
{
    return (
        <div>
            <section className="Hero">
                <img className="Hero--photo" src={img1} alt=""/>
                <h1 className="hero--header">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activities led by one-of-a-kind hostes-all without leaving home.</p>
            </section>
        </div>
    )
}




function Challenge7(){
    return (
        <div>
            <Navbar />
            <Hero />
        </div>
        
    )
}


export default Challenge7;