import React from "react";
import EditOrder from "./EditOrder";
import "./Cards.css";


function OrderCards({quantity, note, product_name, date, order, handleUpdateReview, onDeleteOrder}){

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
                                         <button className="buttom" onClick={handleDeleteClick}>Delete</button> 
                                            <EditOrder order={order} handleUpdateReview={handleUpdateReview} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default OrderCards



