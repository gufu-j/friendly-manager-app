import React, { useContext } from "react";
import { StoreContext } from "./context/store";
import "./Businesses.css";
import { NavLink } from "react-router-dom";


function Businesses(){

    const {stores} = useContext(StoreContext)

    let mapped_stores = stores.map((s) =>

    <div key={s.id}>
    <NavLink to={`/stores/${s.id}`} style={{ textDecoration: 'none'}} >
        <div className="row_p">
            <div className="column_p">
                    <div className="content_p">
                        <div className="cards_p"></div>
                            <div className="card_p">
                                <h3 className="store-name"> Home Freepot {s.id}</h3>
                            <p> Location : {s.location}</p>
                        <p> Phone Number : {s.phone_number}</p>
                    </div>
                </div>
            </div>
        </div>
    </NavLink>
    </div>
    )

return(
    <div>
        
        <h1> List of All Stores</h1>
        {mapped_stores}
    </div>
)

}

export default Businesses