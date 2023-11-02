import React from "react";


function OrderCards({quantity, note, product_name, date}){

    const currentDate = new Date(date).toDateString();

    
    return(
        <div>
            <section>
                <div className="container_two">
                    <div className="cards"> 
                    <div className="card">
                        <h3>Product:  {product_name}</h3>
                        <p>Quantity:  {quantity}</p>
                        <p>Note: {note}</p>
                        <p>{currentDate}</p>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OrderCards



