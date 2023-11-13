import React, { useContext } from "react";
import { UserContext } from "./context/user";


function Businesses(){

    const {stores} = useContext(UserContext)


    let mapped_stores = stores.map((s) => 
        <div className="container" key={s.id}>
            <h3 className="store-name"> Home Freepot {s.id}</h3>
            <p> Location : {s.location}</p>
            <p> Phone Number : {s.phone_number}</p>
        </div>
    )

return(
    <div>
        <h1> List of Bakeries</h1>
        {mapped_stores}
    </div>
)

}

export default Businesses