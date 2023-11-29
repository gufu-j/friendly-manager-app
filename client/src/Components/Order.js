import React, { useContext } from "react";
import { UserContext } from "./context/user";
import OrderCards from "./OrderCards";

function Order(){

    const {store, setStore, user} = useContext(UserContext)

    console.log(store)

    function handleUpdateReview(updatedOrder){
  
        const storeOrders = store.orders.map((or) => {
          if(or.id === updatedOrder.id){
            return updatedOrder
          }else{
            return or
          }
        })  
        setStore({...store, orders: storeOrders})
      }

      function onDeleteOrder(order_deleted){
        const updatedOrders = store.orders.filter((or) => or.id !== order_deleted.id)
        setStore({...store, orders: updatedOrders})
    }



    return(
        <div>
            <h1>Orders</h1>
            {user.admin === true ? null :  
            <div className="background_two">
                { store.length === 0? null : store.orders.map((e) => 
                <OrderCards 
                key ={e.id}
                note ={e.note}
                product_name ={e.product_name}
                quantity ={e.quantity}
                date = {e.created_at}
                store = {store}
                order = {e}
                setStore = {setStore}
                handleUpdateReview = {handleUpdateReview}
                onDeleteOrder = {onDeleteOrder}
                /> ) 
                }
            </div>            
            }

        </div>
    )
}

export default Order
