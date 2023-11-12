import React from "react";
import EditOrder from "./EditOrder";
import "./Cards.css";




function OrderCards({quantity, note, product_name, date, store, order, setStore}){

    const currentDate = new Date(date).toDateString();

    function handleDeleteClick(){
        fetch(`/orders/${order.id}`, {
            method: "DELETE",
        })
        .then((r)=> {
            if(r.ok){
                onDeleteOrder(order)
            }
        })
    }


    function onDeleteOrder(order_deleted){
        const updatedOrders = store.orders.filter((or) => or.id !== order_deleted.id)
        setStore({...store, orders: updatedOrders})
    }

    return(
            <div className="row">
                <div className="column">
                    <div className="content">
                     <div className="cards">
                      <div className="card">
                            <h3>{product_name}</h3>
                            <p>Quantity:  {quantity}</p>
                            <p>Note: {note}</p>
                            <p>{currentDate}</p>
                            <button className="buttom" onClick={handleDeleteClick}>
                            Delete
                            </button> 
                            <EditOrder order={order} />
                         </div>
                      </div>
                    </div>
                </div>
            </div>
        )
}

export default OrderCards



