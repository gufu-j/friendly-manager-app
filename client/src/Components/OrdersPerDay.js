import React from "react";


function OrdersPerDay({quantity, productName, or, store_name}){

    // console.log(quantity)
    // console.log(productName)

    return(
            <ul>
            <li key={or.id}> {productName} : {quantity} units for {store_name} ☐ </li>
            </ul>
    )
}

export default OrdersPerDay