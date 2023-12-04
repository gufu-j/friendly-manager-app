import React from "react";


function TotalDailyOrders({quantity, productName, or}){


    return(
        <ul>
        <li key={or.quantity}> {productName} : {quantity} units ☐ </li>
        </ul>
    )
}

export default TotalDailyOrders