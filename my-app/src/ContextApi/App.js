
/*******Context API allows data to be passed through a component 
 * tree without having to pass props manually at every level. 
 * This makes it easier to share data between components. */

import Login from "./Login"
import Profile from "./Profile"
import {useState} from "react"

import { LoginContext } from "./LoginContext"


function App()
{
    const [showProfile, setShowProfile] = useState(false);
    const [username, setUserName] = useState("");

    return (
        <div>
            <LoginContext.Provider value={{username, setUserName,showProfile, setShowProfile}}>
                {showProfile ? <Profile /> : <Login />}
            </LoginContext.Provider>
            
        </div>
    )
}


export default App;