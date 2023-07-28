import {createContext, useContext, useState} from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({children}) =>
{
    const [user] = useState({
        name: "soukaina",
        email: "soukainaouchenuai@gmail.com",
        age: "24 years old",
    });
    return (
        // the UserContext.Provider is what allows consuming components to subscribe to content
        // changes, this component accepts a value prop which is what will be passed to consuming 
        //components that are descendants of this provider 
        <UserContext.Provider value={{user}}></UserContext.Provider>
    )
}


// create a custom Hook that wraps the use context hook which is the way to consume a context value
export const useUser = () => useContext(UserContext);
// export function useUser()
// {
//     return (
//         useContext(UserContext)
//     )
// }
