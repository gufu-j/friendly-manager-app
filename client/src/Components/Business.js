import React from "react";
import { NavLink} from 'react-router-dom';
import "./Business.css";

function Business({store}){

    return(
        <div className="containerTwo">
           <div className="cardLowManager">
                <NavLink style={{paddingLeft: 13, textDecoration: 'none'}} to={"/orders"}>
                    <div className="container">
                        <h1 className="store-name"> Home Freepot {store.id}</h1>
                        <p> Location : {store.location}</p>
                        <p> Phone Number : {store.phone_number}</p>
                    </div>
                </NavLink>
            </div> 
        </div>
    )
}

export default Business




