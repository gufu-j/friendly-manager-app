import React from "react";
import { useContext } from "react";
import { OrderContext } from "./context/order";


function LowManagerOrders(){

    const {orders} = useContext(OrderContext)

    const moment = require("moment")

    const lowManagerFilteredOrders = orders.sort(function (a, b) {
        if (a.name < b.name) {
         return -1;
         }
        if (a.name > b.name) {
         return 1;
         }
         return 0;
         }).filter(item => {
        const createdAt = moment(item.created_at)
        const startOfToday = moment().startOf('day')
        const endOfToday = moment().endOf('day')
        return createdAt.isBetween(startOfToday, endOfToday)
      })


      console.log(lowManagerFilteredOrders)



    return(
        <div>
            {lowManagerFilteredOrders.map(el => <li key={el.id}>{el.quantity} {el.product_name}</li>)}
        </div>
    )
}

export default LowManagerOrders