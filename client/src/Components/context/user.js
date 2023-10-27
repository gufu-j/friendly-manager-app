import React, {useState, useEffect} from "react";

const UserContext = React.createContext();


function UserProvider({children}){

    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false) //add loggedIn flag

    useEffect(() => {
      fetch('/me')
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
            setLoggedIn(false)

        } else {
            console.log(data)
            setLoggedIn(true)
            setUser(data)
        }
      })
    }, [])

    const login = (user) => {
        setUser(user)
        setLoggedIn(true) //set loggedIn flag
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false) //set loggedIn flag

    }

    const signup = (user) => {
        setUser(user)
        setLoggedIn(true) // set loggedIn flag

    }

    return(
        // add loggedIn to global and state
        <UserContext.Provider value={{user, login, logout, signup, loggedIn, setUser}}>
            {children}
        </UserContext.Provider>
    );

}

export{ UserContext, UserProvider}