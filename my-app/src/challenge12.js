/*********How we can use react to create Dynamique Apps */

/****Event listeners
 * State
 * Conditional rendering
 * Forms
 * side effects
 */

/*******Log something to the console when the mouse hovers over the image */

/********Challenge***Get a random image from the memesData array when "the new meme image" to the console
 * (dont worry about displaying the image yet*** */

import './style4.css';
import img from './images/mems.png';
import img2 from './images/pic.jpeg';


function Challenge12()
{
    return (
        <div>
            <header>
                <nav className="Nav">
                    <img src = {img} alt = "" width="40px"/>
                    <h1 className='text1'>Meme Generator</h1>
                    <h3 className='text2'>React Course- Project3</h3>
                </nav>
            </header>
            
            <div className="Div2">
                <input className="Form-input" type='text' placeholder="Top text"/>
                <input className="Form-input" type='text' placeholder="Bottom text"/>
                <button className="btn" onClick={function(){
                    window.alert("hello souchen");
                }}> Get a new meme image </button>
            </div>
            <div>
                <img src={img2} alt="" width="400px" height="500px" onMouseOver = {function(){
                    window.alert("This is a mem image");
                }}/>
            </div>
        </div>
    )
}

export default Challenge12;