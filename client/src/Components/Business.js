import { useEffect } from 'react';
import { useState } from "react";
import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { NavLink } from 'react-router-dom';



function Business(){


    const [store, setStore] = useState([]);
    const {user} = useContext(UserContext)

    const ordersPage = () => { 
        console.log("you just clicked me")
    }

    useEffect(() =>{
        fetch(`/stores/${user.id}`)
        .then((r) => r.json())
        .then((r) => setStore(r))
    }, [])

    console.log(store)

    return(
        <div className="container">
            <p className="store-name"> Home Freepot {store.id}</p>
             <p> Location : {store.location}</p>
            <p> Phone Number : {store.phone_number}</p>
            <button className= "tbn btn-success" onClick = {ordersPage}> </button>
        </div>
    
    )
}

export default Business