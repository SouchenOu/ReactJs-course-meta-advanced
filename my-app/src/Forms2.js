/**********Forms */


/*******Build a Meme Generator Form input practice **********/


/********Part one : --> textarea*/
/********Part two : -->  checkbox*/
/********Part three: --> radio */
/********Part four : --> Select and option */
/*********Part five: --> Submitting the form */
import React from "react";
import "./style6.css"

function Forms2()
{
    // const [firstName, setFirstName] = React.useState("");
    // const [lastName, setLastName] = React.useState("");

    const [formData, setFormData] = React.useState({firstName: "", lastName: "", email: "" , comments: "", favColor: ""})
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
    function handelSubmit(event)
    {
        event.preventDefault();
        console.log(formData);
    }
    return (
        <form onSubmit={handelSubmit}>
            <input type="text" name="firstName"placeholder="First Name" onChange={handleChange} value={formData.firstName}></input>
            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName}></input>
            <textarea value={formData.comments} placeholder="comments" onChange={handleChange} name="comments"/>
            <div className="checkbox">
                <input type="checkbox" id="isFriendly" checked={isFriendly} onClick={handelIsFriendly}/>
                <label htmlFor="isfriendly">Are you friendly?</label>
            </div>
            <fieldset>
                <legend>Current employment status</legend>
                <input type="radio" id="unemployed" name="employment"/>
                <label  htmlFor="unemployed">unemployed</label>
                <br />

                <input type="radio" id="part-time" name="employment"/>
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input type="radio" id="full-time" name="employment"/>
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <label htmlFor="favColor">What is your favorite color ?</label>
            
            <br/>
            <select id="favColor" value={formData.favColor} onChange={handleChange}>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>

            </select>
            <br />
            <br />
            <button type="submit">Submit</button>

            
        </form>
    )
}


export default Forms2;