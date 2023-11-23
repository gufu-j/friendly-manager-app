import React, { useContext } from "react";
import { UserContext } from "./context/user";
import Business from "./Business";
import Businesses from "./Businesses";
// import Order from "./Order";

import { StoreProvider } from "./context/store";

function Home(){


    const {loggedIn, store, setStore, user} = useContext(UserContext)


    if(loggedIn){
     return(
        <div>
            {user.admin? 
            <div>  
                 <StoreProvider>
                 <Businesses/> 
                 </StoreProvider>
            </div> : <Business store={store} setStore={setStore}/> }
        </div>
     );
     
    } else {
        return (
            <div>
                chingatumadrebato
            </div>
        )
    }
}

export default Home

