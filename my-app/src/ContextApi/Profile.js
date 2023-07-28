
import {useContext} from "react"
import { LoginContext } from "./LoginContext";


function Profile()
{
    const {username} =useContext(LoginContext);
    return (
        <div>
            <h1>Welcome my friend</h1>
            <h2>UserName : {username}</h2>
        </div>
    )
}

export default Profile;