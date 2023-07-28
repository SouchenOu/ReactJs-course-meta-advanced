/*********************************We will see In Part1**************************
 * 
 * 1: Controlled components in React
 * 
 * 
 * 2: Html forms
 * 
 * 3: Create forms as react components
 * 
 * 4: Use local state and the onChange event
 * 
 * 5: Avoid the default behavior of the submit event
 * 
 * 6: Disable the submit button when the form is not valid
 */

/*****Controlled components are a set of components that offer a declarative application programming interface 
 * or API to enable full control of the state form elements at any point in time using react state
 */


/********
 * 
 * 
 * In React, Controlled Components are those in which form’s data 
 * is handled by the component’s state. It takes its current value through 
 * props and makes changes through callbacks like onClick,onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.
 */

/***************************************We will see in Part2 **************/
/*****
 * How to build a feedback form with React
 * 
 * How to use controlled components and custom validition to provide a seamless experience
 * 
 * 
 */
import {useState} from "react";

function Forms()
{

    const [name, setName] = useState("");


    function handelSubmit(e)
    {
        // here no refresh happens and no server is hit with the request
        e.preventDefault();
        setName("");
        window.alert(`Form submitted...${name}`);
    }
  
   
    const [score, setScore] = useState("10");
    const [comments, setComments] = useState("");
    const handelSubmit2 = (event) => {
        event.preventDefault();
        if(Number(score) <= 5 && comments.length <= 10)
        {
            window.alert("True");
            return ;
        }
        window.alert("Form submitted..");
        setComments("");
        setScore("10");
    }
    return (
        <div>
                            {/* Part1 */}
            <form onSubmit={handelSubmit}>
                <fieldset>
                    <div className="fieldset">
                        {/* we put in htmlFor the id (id = "name") so when we click label Name we focus for the input of the name */}
                        {/* The Htmlfor attribute specifies which form element a label is bound to. */}
                        <label htmlFor="name">Name:</label>
                        {/* <input type="text" placeholder="Name" name="name" value={name} onChange={(event) => setName(event.target.value)}/> */}
                        <input id="name" type="text" placeholder="Name" name="name" value={name} onChange={function (event) {
                            return setName(event.target.value)
                        } }/>
                    </div>

                     {/* (disabled={!name}-->)if we didnt write the name  in the input we cant click the button  */}
                    <button disabled={!name} type="submit">Submit</button>
                </fieldset>
            </form>
                            {/* Part2 */}
            <div>
                {/* to wrap up the range component i need to do two more things turn the input into a control component and visually
                show the numeric value that represents the slider selection for that i will define a new piece of state called score i will initialize to 10 */}
                <form onSubmit={handelSubmit2}>
                    <fieldset >
                        <h2>FeedBack form :</h2>
                        <div className="Field">
                            <label>Score: {score} </label>
                            <input type="range" min={0} max={10} value={score} onChange={function(event){
                                return setScore(event.target.value)
                            }
                            }/>                        
                        </div>
                        <div className="field">
                            <label>Comments:</label>
                            <textarea  value={comments} onChange={(e) =>setComments(e.target.value)}/>

                        </div>
                        <button type="submit">Submit</button>
                    </fieldset>
                </form>
            </div>              
        
        </div>
    )
}

export default Forms;