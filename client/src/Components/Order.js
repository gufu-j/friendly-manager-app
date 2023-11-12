import React, { useContext } from "react";
import { UserContext } from "./context/user";
import OrderCards from "./OrderCards";
import AdminOrders from "./AdminOrders";

function Order(){

    const {store, setStore, user} = useContext(UserContext)


    return(
        <div>
            <h1>Orders</h1>
            {/* {identity != "" ? console.log(true) : console.log(false)} */}
            {user.admin === true ? <AdminOrders /> :  
            <div className="background_two">
                { store.length === 0 ? null : store.orders.reverse().map((e) => 
                <OrderCards 
                key ={e.id}
                note ={e.note}
                product_name ={e.product_name}
                quantity ={e.quantity}
                date = {e.created_at}
                store = {store}
                order = {e}
                setStore = {setStore}/> ) 
                }
            </div>            
            }

        </div>
    )
}

export default Order
