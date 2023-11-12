import React from "react";



function AdminOrders(){

    return(
        <div>
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
        </div>
    )
}

export default AdminOrders