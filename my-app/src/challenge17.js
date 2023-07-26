/*******
 * Challenge : Update our state to save the meme-related data as an object called 'meme'.It should have the following 3 properties
 * topText, buttomText, randomImage


 * The 2 Text states can default to empty strings for now , and randomImage should default to "" "" 

next, create a new state variable called 'allMemeImages'
which will default to 'memesData, which we imported above 

Lastly , update the 'getmemeImage' function and the markup to reflect our newly reformed state object and array in the correct way

 * 
 * 
 * 
 */

import './style4.css';
import Boxes from './boxes.js'
import Boxe from './Box.js'
import './style6.css'
import React from 'react'

/********Challenge PART1 
 * 
 * 1 Initialise state with the default value of the array pulled in from boxes.js
 * 
 * Map over that state array and display each one as an 
 * 
 * 2 Map over that state array and display each one as an empty square (black border, transparent )
 * Dont worry about using "on" proprty yet
*/



/***********Challenge PART2 */
/*******
 * 
 * 
 * 1; Create a seperate component called BOX and replace the 'div' above with our <Box /> components
 * 
 * 2: Pass the Box component a prop called 'on' with the value of the same name from the 'boxes' objects
 * 
 * 3: In the Box component , apply dynamic styles to determine the backgroundColor of the bow. It it is 'on' , set the backgroundColor to '#222222'. If off , set it to "none"
 */

/********
 * Challenge PART3
 * 
 * create state controlling whether this box is "on" to determine the initial state
 * 
 * 
 * Create an event listener so when the box is clicked it toggles from "on " to "off"
 * 
 * Goal: clicking each box should toggle it on and off
 * 
 * 
 */



function Challenge17(props)
{

    const [squares, setSquares] = React.useState(Boxes);

    /**We can style like that */
    // document.getElementById("something").style.backgroundcolor = '#222222';
    /****Or like that */
    const styles = {
        backgroundColor: "black"
    }
    if(props.darkMode === true)
    {
        styles.backgroundColor = "#222222";
    }else
        styles.backgroundColor = "#cccccc";
    
    // const array = ["1", "2", "3"];
    const squareElements = squares.map(function(elem){
       return (
         //<div style={styles} className='box' key={squares.id}></div>
         <Boxe 
            on = {elem.on}
            
         />
       )
    })

   
     
    function AddElement()
    {
        const newElement = `id : 4 `;
        setSquares(prevState => [...prevState, newElement]);
    }
    
    return (
        <div>
                 {/* <h1 className='box'>Boxes will go here</h1> */}
                 <button className="btn" onClick={AddElement}>btn</button>
                 <div>
                        {squareElements}
                 </div>
                 
           
        </div>
    )
}

export default Challenge17;