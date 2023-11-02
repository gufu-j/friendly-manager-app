import React, { useContext } from "react";
import { UserContext } from "./context/user";
import Business from "./Business";
// import Order from "./Order";

function Home(){


    const {loggedIn, store, setStore} = useContext(UserContext)



    if(loggedIn){
     return(
        <div>
           <Business store={store} setStore={setStore}/>
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

