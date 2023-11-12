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
                      <p>store {s_number}</p>
                            <p>{s_name}</p>
                            <h3>{s_product}</h3>
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