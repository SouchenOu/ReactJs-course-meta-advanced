///***Challenge19*** */

/*******
 * 
 * 
 * 1: Create a state object to store the 4 values we need to save.
 * 2: Create a single handleChange function that can manage the state of all the inputs and set it up correctly
 * 3: When the user clicks "sign up" , check if the password & confirmation match each other . If so , log "successfully signed up" to the console.
 * 4: Also when submitting the form , if the person checked the "newsletter" checkbox , log "Thanks for signing up for our newsletter!" to the console
 */

import React from "react";
import "./style6.css"

function Challenge19()
{

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsletter:"true"
    })
    function handleChange(event)
    {
        const {name, value, type, checked} = event.target
        // target present the element that modify in the event
        setFormData(prevFormData  => ({
            ...prevFormData, 
                [name] :type === "checkbox" ? checked : value
        }))
    }
    function handleSubmit(event)
    {
        event.preventDefault();
        if(formData.password === formData.passwordConfirm)
        {
            console.log("Successfully signed up");
        }else
            console.log("incorrect password");

        if(formData.joinedNewsletter)
        {
            console.log("Thanks for signing up for our newsletter!");
        }
    }
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password"
                    placeholder="Confirm password"
                    className="form--input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                />
                <div className="checkbox">

                    <input 
                        id="okeyToEmail"
                        type="checkbox"
                        name="joinedNewsletter"
                        onChange={handleChange}
                        checked={formData.joinedNewsletter}
                    />
                    <label htmlFor="okeyToEmail">I want to join the newsletter</label>
                </div>
                <button className="btn">Sign up</button>
                


            </form>


        </div>
    )
}

export default Challenge19