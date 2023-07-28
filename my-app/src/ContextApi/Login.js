
import "./style7.css"
import {useContext} from "react"
import { LoginContext } from "./LoginContext";
function Login() {

    const {setUserName, setShowProfile} = useContext(LoginContext);
    // const {setShowProfile} = useContext(LoginContext)
    function check()
    {
        window.alert("Welcome in your profile");
        setShowProfile(true); 
    }
    return (
        <div className="Login">
            <fieldset>
                <input  type="text" placeholder="userName.." onChange={(e) => setUserName(e.target.value)}></input>
                <input type="text" placeholder="Password..." />
                {/* <button onClick={()=> {setShowProfile("true")}}>Login</button> */}
                <button onClick={check}>Login</button>
            </fieldset>
            
        </div>
    )
}

export default Login;