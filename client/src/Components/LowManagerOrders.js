import React from "react";
// import { useContext } from "react";
// import { OrderContext } from "./context/order";
// import { UserContext } from "./context/user";


function LowManagerOrders({store}){

    console.log(store)
    return(
        <div>
            
            {store.length === 0 || store.organized_orders.length === 0? null : 
            store.organized_orders.filter( el => new Date(el.created_at).toDateString() === new Date().toDateString()).map(el => <li key={el.id}>{el.quantity} {el.product_name}</li>) }

        </div>
    )
}

export default LowManagerOrders