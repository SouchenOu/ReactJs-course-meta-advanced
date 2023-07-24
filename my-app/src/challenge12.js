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



/********Challenge 2
 * 
 * Add images to the mame generator
 * 
 * save the random meme URL in state 
 * 
 * Create new statecalled 'memeImage' with an empty string as default
 * 
 * When the getMemeImage function is called, update the 'memeImage' state to be the random chosen image URL
 * 
 * Below the div.form, add an <img /> and set the src to the new 'memeImage' state you created
 */
import './style4.css';
import img from './images/mems.png';
// import img2 from './images/pic.jpeg';
import React from 'react';


function Challenge12()
{

    let arrayImages = ['https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg', "https://images.ctfassets.net/hrltx12pl8hq/3Z1N8LpxtXNQhBD5EnIg8X/975e2497dc598bb64fde390592ae1133/spring-images-min.jpg", "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"];
    let [image, setImages] = React.useState("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg");
    let i = 0;
    function set_image()
    {
        image = arrayImages[i];
        
        // i++;
        setImages(image);
        
        window.alert(image);

    }

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
                <button className="btn" onClick={set_image}> Get a new meme image </button>
            </div>
            <div>
                <img src= {image} alt='' width="400px" height="500px" onMouseOver = {function(){
                    window.alert(`This is a mem image --${image}`);
                }}/>
            </div>
        </div>
    )
}

export default Challenge12;