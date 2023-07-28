


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