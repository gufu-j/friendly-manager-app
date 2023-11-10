import React, { useContext } from "react";
import { UserContext } from "./context/user";


function Businesses(){

    const {stores} = useContext(UserContext)

    let mapped_stores = stores.map((s) => 
        <div className="container" key={s.id}>
            <p className="store-name"> Home Freepot {s.id}</p>
            <p> Location : {s.location}</p>
            <p> Phone Number : {s.phone_number}</p>
        </div>
    )

return(
    <div>
        {mapped_stores}
    </div>
)

}

export default Businesses