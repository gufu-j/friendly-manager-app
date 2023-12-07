import React, { useContext } from "react";
import { UserContext } from "./context/user";
import OrderCards from "./OrderCards";
import { OrderContext } from "./context/order";


function Order(){

    const {store, setStore, user} = useContext(UserContext)
    const {orders, setOrders} = useContext(OrderContext)

    function handleUpdateReview(updatedOrder){
  
      //lower manager orders' update trough his/her respective store after updating 
        const storeOrdersLowManager = store.organized_orders.map((or) => {
          if(or.id === updatedOrder.id){
            return updatedOrder
          }else{
            return or
          }
        })  
        setStore({...store, organized_orders: storeOrdersLowManager,})

        //top manager orders' update of spefic orders from low managers.
        const ordersTopManager = orders.map((or) => {
          if (or.id === updatedOrder.id) {
            return updatedOrder
          }else{
            return or
          }
        })
        setOrders(ordersTopManager)
        
      }

      function onDeleteOrder(order_deleted){
        //lower manager update after deleting 
        const updatedOrdersLowerManager = store.organized_orders.filter((or) => or.id !== order_deleted.id)
        setStore({...store, organized_orders: updatedOrdersLowerManager})

        //top manager orders update after deleting
        const updatedOrdersTopManager = orders.filter((or) => or.id !== order_deleted.id);
        setOrders(updatedOrdersTopManager)
        
    }

    


    return(
        <div>
            <h1>Orders</h1>
            {user.admin === true ? null :  
            <div className="background_two">
                { store.length === 0? null : store.organized_orders.map((e) => 
                <OrderCards 
                key ={e.id}
                note ={e.note}
                product_name ={e.product_name}
                quantity ={e.quantity}
                date = {e.created_at}
                store = {store}
                organized_order= {e}
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
