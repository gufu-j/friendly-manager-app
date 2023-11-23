import React, {useState, useEffect} from "react";


const StoreContext = React.createContext();


function StoreProvider({children}){

    const [stores, setStores] = useState([]);
    const [record, setRecord] = useState("")

    useEffect(() =>{
        fetch(`/stores`)
        .then((r) => r.json())
        .then((r) => setStores(r))
    },[])

    return(
        // add loggedIn to global and state
        <StoreContext.Provider value={{stores, setStores, setRecord, record}}>
            {children}
        </StoreContext.Provider>
    );

}

export{ StoreContext, StoreProvider}