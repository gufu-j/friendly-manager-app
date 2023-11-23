import React from "react";
import { UserContext } from "./context/user";
import { useContext } from "react";
import { useState } from "react";

import AdminOrders from "./AdminOrders";

function TotalOrders(){

    const {stores} = useContext(UserContext)

    const [searchOrder, setSearchOrder] = useState("")
    const [searchProduct, setSearchProduct] = useState("")

    
    console.log(searchProduct)


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

    // let all_cards_list = stores.filter( s => {

    //     if(searchOrder === "0" || searchOrder === ""){
    //         return stores
    //       }else if( parseInt(searchOrder) > 0  ){
    //         return s.id === parseInt(searchOrder)
    //       }
    // }
    // ).map(s => s.orders.reverse().map(e =>
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
     ).map(s => s.orders.filter(or =>  {

        if(searchProduct === "0" || searchProduct === ""){
            return s.orders
                }else if (searchProduct != "" || searchOrder != "0"){
                    return or.product_name === searchProduct
                }
            } ).map(e =>
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
            <div>
                <div onChange={(e)=>setSearchOrder(e.target.value)}>
                    <label className="label"> Search For Store:  </label>
                    <input type="text" className="input" placeholder="Store Number "/>
                </div>
                <div  onChange={(e)=>setSearchProduct(e.target.value)} >
                <label className="label"> Search For Product:  </label>
                 <input type="text" className="input" placeholder="Product Name"/>
                </div>
            </div>
            {all_cards_list}
        </div>
    )
}

export default TotalOrders