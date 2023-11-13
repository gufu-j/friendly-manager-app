import React from "react";

function AdminOrders({s_name, s_number, s_product, s_quantity, s_note, s_date}){
    

    return(
        <div>
        <ul>
             <div className="row">
                <div className="column">
                    <div className="content">
                     <div className="cards">
                      <div className="card">
                      <h3>store {s_number}</h3>
                      <h3>Product: {s_product}</h3>
                            <p>{s_name}</p>
                            <p>Quantity:  {s_quantity}</p>
                            <p>Note: {s_note}</p>
                            <p>{new Date(s_date).toDateString()}</p>
                         </div>
                      </div>
                    </div>
                </div>
            </div>
        </ul>
        </div>
    )
}

export default AdminOrders