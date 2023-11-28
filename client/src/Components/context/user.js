import React, {useState, useEffect} from "react";
const UserContext = React.createContext();


function UserProvider({children}){

    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false) //add loggedIn flag
    const [store, setStore] = useState([]);
    const [stores, setStores] = useState([]);


    useEffect(() => {
      fetch('/me')
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
            setLoggedIn(false)

        } else {
            setLoggedIn(true)
            setUser(data)
        }
      })
    }, [])

    //we are grabbing a store depending on the user that logs in.

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

    useEffect(() =>{
        if (loggedIn === true && user.admin === false) {
        fetch(`/stores/${user.store.id}`)
        .then((r) => r.json())
        .then((r) => setStore(r))
        }else{
        fetch(`/stores`)
        .then((r) => r.json())
        .then((r) => setStores(r))
        }
    },[loggedIn, user])
  


    return(
        // add loggedIn to global and state
        <UserContext.Provider value={{user, login, logout, signup, loggedIn, setUser, store, setStore, stores}}>
            {children}
        </UserContext.Provider>
    );

}

export{ UserContext, UserProvider}