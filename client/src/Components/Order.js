import React, { useContext } from "react";
import { UserContext } from "./context/user";
import OrderCards from "./OrderCards";

function Order(){

    const {store} = useContext(UserContext)
    console.log(store)

    if (store.length === 0){
        console.log("true")
    }else{
        console.log(store)
    }

    return(
        <div>
            <h1>Orders</h1>
        <div className="background_two">
            { store.length === 0 ? true : store.orders.map((e) => 
            <OrderCards 
            key ={e.id}
            note ={e.note}
            product_name ={e.product_name}
            quantity ={e.quantity}
            date = {e.created_at}/> ) 
            }
        </div>
        </div>
    )
}

export default Order
