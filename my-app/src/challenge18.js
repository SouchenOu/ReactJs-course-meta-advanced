/**********Forms */


/*******Build a Meme Generator Form input practice **********/

import React from "react";
import "./style6.css"

function Challenge18()
{
    // const [firstName, setFirstName] = React.useState("");
    // const [lastName, setLastName] = React.useState("");

    const [formData, setFormData] = React.useState({firstName: "", lastName: "", email: "" , comments: ""})
    const [isFriendly, setIsFriendly] = React.useState ("true")
    console.log(formData.firstName);
    console.log(formData.lastName);
    console.log(formData.email);
    console.log(formData.comments);
    // function handleChange1(event)
    // {
    //     //window.alert("Changed");
    //     setFirstName(event.target.value);
    // }
    // function handleChange2(event)
    // {
    //     setLastName(event.target.value);
    // }

    function handleChange(event)
    {
        setFormData(prevFormData => {
            return {
                ...prevFormData, 
                [event.target.name]: event.target.value 
            }
        })
    }
    function handelIsFriendly()
    {
        setIsFriendly("false");
    }
    return (
        <form>
            <input type="text" placeholder="First Name" onChange={handleChange} value={formData.firstName}></input>
            <input type="text" placeholder="Last Name" onChange={handleChange} value={formData.lastName}></input>
            <textarea value={formData.comments} placeholder="comments" onChange={handleChange} name="comments"/>
            <div className="checkbox">
                <input type="checkbox" id="isFriendly" checked={isFriendly} onClick={handelIsFriendly}/>
                <label htmlFor="isfriendly">Are you friendly?</label>
            </div>
            
        </form>
    )
}


export default Challenge18;