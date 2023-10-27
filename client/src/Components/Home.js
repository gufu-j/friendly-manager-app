import React, { useContext } from "react";
import { UserContext } from "./context/user";
import Business from "./Business";
// import Bakery from "./Bakery";





function Home(){


    const {loggedIn} = useContext(UserContext)



    if(loggedIn){
     return(
        <div>
           <Business/>
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

