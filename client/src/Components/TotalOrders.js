import React from "react";
import { UserContext } from "./context/user";
import { useContext } from "react";

import AdminOrders from "./AdminOrders";

function TotalOrders(){

    const {stores} = useContext(UserContext)

    console.log(stores)

    


    let all_cards_list = stores.map(s => s.orders.map(e =>
        <div>
        <AdminOrders
        s_name = {e.store_name}
        s_number= {e.store_number}
        s_product = {e.product_name}
        s_quantity = {e.quantity}
        s_note = {e.note}
        s_date = {e.created_at}
        />
        </div>
    
    ))


    return(
        <div>
            {all_cards_list}
        </div>
    )
}

export default TotalOrders