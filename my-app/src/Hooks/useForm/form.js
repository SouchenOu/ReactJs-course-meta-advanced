import { useState } from "react";

const Form = () =>
{
    const [name, setName] = useState("");
    const [handle, setHandle] = useState("");

    const register = (event) =>
    {
        event.preventDefault();
        console.log(name, handle);
    }
    return (
        <form onSubmit={register} className="">

            <label>Name: </label>
            <input  className="" placeholder="Your name" type="text" value={name} onChange={function(event){setName(event.target.value)}}/>
            <label>Handle:</label>
            <input />
        </form>
    )
}