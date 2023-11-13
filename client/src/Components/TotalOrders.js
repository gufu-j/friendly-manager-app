import React from "react";
import { UserContext } from "./context/user";
import { useContext } from "react";
import { useState } from "react";

import AdminOrders from "./AdminOrders";

function TotalOrders(){

    const {stores} = useContext(UserContext)

    console.log(stores)

    const [searchOrder, setSearchOrder] = useState("")

    // let all_cards_list = stores.filter(s => s.id === parseInt(searchOrder)).map(s => s.orders.map(e =>
    //     <div key={e.id}>
    //     <AdminOrders
    //     key={e.id}
    //     s_name = {e.store_name}
    //     s_number= {e.store_number}
    //     s_product = {e.product_name}
    //     s_quantity = {e.quantity}
    //     s_note = {e.note}
    //     s_date = {e.created_at}
    //     />
    //     </div>
    
    // ))

    let all_cards_list = stores.filter( s => {

        if(searchOrder === "0" || searchOrder === ""){
            return stores
          }else if( parseInt(searchOrder) > 0  ){
            return s.id === parseInt(searchOrder)
          }
    }
    ).map(s => s.orders.reverse().map(e =>
        <div key={e.id}>
        <AdminOrders
        key={e.id}
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
            <h1>All Orders</h1>
                <div onChange={(e)=>setSearchOrder(e.target.value)}>
                    <label className="label"> Search For Orders:  </label>
                    <input type="text" className="input" placeholder="Store Number "/>
                </div>
            {all_cards_list}
    
        </div>
    )
}

export default TotalOrders