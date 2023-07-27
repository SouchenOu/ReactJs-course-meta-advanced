/******We will see****
 * 
 * 1: Controlled components in React
 * 
 * 
 * 2: Html forms
 * 
 * 3: Create forms as react components
 * 
 * 4: Use local state and the on Change event
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
 * In React, Controlled Components are those in which form’s data i
 * s handled by the component’s state. It takes its current value through 
 * props and makes changes through callbacks like onClick,onChange, etc. A parent component manages its own state and passes the new values as props to the controlled component.
 */
import {useState} from "react";

function Forms()
{

    const [name, setName] = useState("");

    // function handelFunction(event)
    // {
    //     setName(prevName => {
            
    //         return {
    //             ...prevName, 
    //             [event.target.name]: event.target.value 
    //         }
    //     })
    // }
    function handelSubmit()
    {
        window.alert("Form submitted...");
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <fieldset>
                    <div className="fieldset">
                        <label>Name:</label>
                        <input type="text" placeholder="Name" name="name" value={name} onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    )
}

export default Forms;