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





/***********************Explain************************************************ */

/****Props and state**** */

/*****
 * Props and state are both plain JavaScript or JS objects the react uses to hold information as 
 * 
 * So we will discover the differences and similarities between props and state in React 
 * 
 * you will also learn how to identify whether something falls into props or state
 * 
 * 
 * Identify when state is needed
 * 
 * 
 * Differentiate between different React components based on props and state
 */


/******The difference between Props and State----> */

/*********Props:  get passed to the component like parameters in a function where state 
 * is manages within the component
 * like variables declared within a function .
 * 
 * 
 * Both States and Props are plain JS objects and are deterministic this means your component always 
 * generates the same output for the same combination of props
*/


/******How do we know if something goes inside props or states ? 
 * 
 * The rule of them is if the component needs to alter (modifier) one of its attributes at some point in time that 
 * that attribute should be part of its State otherwise id should just be a prop for that component
*/

/****State is a way to allow react to determine when it should re-render a component   
 * 
 * States life cycle starts with a default value when a component mounts and then modifications
 * 
 * of that value happen over time mostly generated from user event
*/
/*******Props is a way to pass a data */



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



function StateProps(props)
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

export default StateProps;