import React from "react";
import EditOrder from "./EditOrder";
import "./Cards.css";


function OrderCards({quantity, note, product_name, date, organized_order, handleUpdateReview, onDeleteOrder}){

    // const currentDate = new Date(date).toDateString();
     

    function handleDeleteClick(){
        fetch(`/orders/${organized_order.id}`, {
            method: "DELETE",
        })
        .then((r)=> {
            if(r.ok){
                onDeleteOrder(organized_order)
            }
        })
    }

    const dataCardIsCreated = new Date(date).toDateString();
    const today = new Date().toDateString();


    return(
            <div className="row">
                <div className="column">
                    <div className="content">
                        <div className="cards">
                            <div className="card">
                                <h3>{product_name}</h3>
                                    <p>Quantity:  {quantity}</p>
                                      <p>Note: {note}</p>
                                         <p>{dataCardIsCreated}</p>
                                         {today === dataCardIsCreated? 
                                         <div>
                                         <button className="buttom" onClick={handleDeleteClick}>Delete</button>
                                         <EditOrder organized_order={organized_order} handleUpdateReview={handleUpdateReview} />
                                         </div>
                                         :
                                         null
                                         }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default OrderCards



