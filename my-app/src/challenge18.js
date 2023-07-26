/**********Forms */


/*******Build a Meme Generator Form input practice **********/

import React from "react";


function Challenge18()
{
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");

    console.log(firstName);
    console.log(lastName);
    function handleChange1(event)
    {
        //window.alert("Changed");
        setFirstName(event.target.value);
    }
    function handleChange2(event)
    {
        setLastName(event.target.value);
    }
    return (
        <form>
            <input type="text" placeholder="First Name" onChange={handleChange1}></input>
            <input type="text" placeholder="Last Name" onChange={handleChange2}></input>

        </form>
    )
}


export default Challenge18;