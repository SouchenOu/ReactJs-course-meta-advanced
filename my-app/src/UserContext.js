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
        <UserContext.Provider value={{user}}></UserContext.Provider>
    )
}



export const useUser = () => useContext(UserContext);
