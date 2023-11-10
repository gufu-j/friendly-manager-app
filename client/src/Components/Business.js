import React from "react";
import { NavLink} from 'react-router-dom';
import "./Business.css";



function Business({store}){

    return(
         <div>
        <NavLink style={{paddingLeft: 13, textDecoration: 'none'}} to={"/orders"}>
            <div className="container">
                <p className="store-name"> Home Freepot {store.id}</p>
                 <p> Location : {store.location}</p>
                <p> Phone Number : {store.phone_number}</p>
            </div>
        </NavLink>
        </div> 
    )
}

export default Business




