import React, {createContext, useState} from "react";

export const AuthContext = createContext()
export default function AuthProvider({children}) {
    const [userName, setUsername] = useState('');

    const handleChange = (e) => {
        const {value} = e.target;
        setUsername(value)
    }


    return <AuthContext.Provider value={{loggedInUser: userName, handleChange: handleChange}}>{children}</AuthContext.Provider>
}