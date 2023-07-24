/*********Build an AirBnb Experiences Clone | Loading images from .map() */



/*******
 * Props
 * Mapping Data
 * 
 * 
 */


import img2 from "./images/1.jpeg";
//  import img3 from "./images/2.png";
// import img4 from "./images/3.jpeg";
import stars from "./images/stars.png";
import './style2.css'
import Data from './data.js'

function Card(props)
{
    return (
        <div>
            <div className="Card">
                <img  className="Card-image" src={props.image} alt="" />
                <div className="card--stats">
                    <img className="Card-star" src={props.stars} alt="" />
                    <span className="gray">{props.gray}</span>
                    <span className="gray_city">{props.grayCity}</span>
                </div>
                <p>{props.para}</p>
                <p><span className="Span-p">{props.spanP}</span> {props.Genre}</p>

            </div>
        </div>
    )
}

function challenge11()
{
    

    const result = Data.map(function(elem){
        return <Card image = {img2} stars = {stars} gray ={elem.gray} grayCity ={elem.grayCity} para = {elem.para} spanP = {elem.spanP} Genre = {elem.Genre}/>;
    })
    return(
        <section className="OurResult">
            {result}
        </section>
       
    )
}


export default challenge11;