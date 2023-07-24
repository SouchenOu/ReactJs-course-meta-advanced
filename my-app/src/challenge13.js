import './style5.css';
import React from 'react'
/******Challenge : Map over the thingsArray to generate a <p> element for each item and render them on the page below the button */



/*********
 * Add an event listener to the button so when it is clicked , it adds another thing to our array
 * 
 * Hint use the array length + 1 to determine the number of the "Thing" being added. Also , Have you event listener console.log(thingsArray)
 * 
 * after adding the new item to the array
 * 
 * Spoiler : the page wont update when new things get added to the array 
 */

/********
 * 
 * Build a meme Generator | useState array destructuring
 */

function Challenge13()
{

    //const array = ["Thing1", "Thing2"]
    const [array, setArray] = React.useState(["Thing1", "Thing2"])

    const result = array.map(function(elem){
        return (<p>{elem}</p>);
    })
    function AddItems()
    {
        const newThingText = `Thing${array.length + 1}`
        //array.push(newThingText);
        setArray(prevState => [...prevState, newThingText])
        window.alert(array);
    }


    /****************next Exercice */

    

    return (
    <div className='Div'>
        <button onClick={AddItems} className='btn'>Add Item</button>
        {result}
    </div>)
}

export default Challenge13;