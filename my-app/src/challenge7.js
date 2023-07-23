import img from "./images/arbnb-logo.jpeg"
import './style2.css';
import img1 from "./images/grid-pic.jpeg";
import img2 from "./images/1.jpeg";
// import img3 from "./images/2.png";
// import img4 from "./images/3.jpeg";
import stars from "./images/stars.png";

/***********Build an application---> Challenge7 */

/// Build an AirBnb  Experiences Clone | Props 


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

function Card()
{
    return (
    
    <div className="AllCard">

        <div className="Card">
            <img  className="Card-image" src={img2} alt="" />
            <div className="card--stats">
                <img className="Card-star" src={stars} alt="" />
                <span>5.0</span>
                <span className="gray">(6) .</span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with katie zaferes</p>
            <p><span className="Span-p">from $136</span> /Person</p>

        </div>
        <div className="Card">
            <img  className="Card-image" src={img2} alt="" />
            <div className="card--stats">
                <img className="Card-star" src={stars} alt="" />
                <span>5.0</span>
                <span className="gray">(6) .</span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with katie zaferes</p>
            <p><span className="Span-p">from $136</span> /Person</p>
        </div>
        <div className="Card">
            <img  className="Card-image" src={img2} alt="" />
            <div className="card--stats">
                <img className="Card-star" src={stars} alt="" />
                <span>5.0</span>
                <span className="gray">(6) .</span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with katie zaferes</p>
            <p><span className="Span-p">from $136</span> /Person</p>
        </div>
        <div className="Card">
            <img  className="Card-image" src={img2} alt="" />
            <div className="card--stats">
                <img className="Card-star" src={stars} alt="" />
                <span>5.0</span>
                <span className="gray">(6) .</span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with katie zaferes</p>
            <p><span className="Span-p">from $136</span> /Person</p>
        </div>
        <div className="Card">
            <img  className="Card-image" src={img2} alt="" />
            <div className="card--stats">
                <img className="Card-star" src={stars} alt="" />
                <span>5.0</span>
                <span className="gray">(6) .</span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with katie zaferes</p>
            <p><span className="Span-p">from $136</span> /Person</p>
        </div>
      

    </div>
        
    )
}




function Challenge7(){
    return (
        <div>
            <Navbar />
            <Hero />
            <Card />
        </div>
        
    )
}


export default Challenge7;