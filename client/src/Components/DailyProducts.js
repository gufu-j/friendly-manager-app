import React from "react";
import { useContext } from "react";
import { OrderContext } from "./context/order";
import OrdersPerDay from "./OrdersPerDay";
import TotalDailyOrders from "./TotalDailyOrders";


function DailyProduct(){

    const {orders} = useContext(OrderContext)


    
//    const ulta = orders.sort(function(a, b) {
//       var keyA = new Date(a.created_at),
//         keyB = new Date(b.created_at);
//       // Compare the 2 dates
//       if (keyA < keyB) return -1;
//       if (keyA > keyB) return 1;
//       return 0;
//     });
    
//     console.log(ulta);

    const moment = require("moment")

    const filteredDailyOrders = orders.filter(item => {
        const createdAt = moment(item.created_at)
        const startOfToday = moment().startOf('day')
        const endOfToday = moment().endOf('day')
        return createdAt.isBetween(startOfToday, endOfToday)
      })

      console.log(filteredDailyOrders)

      const mappedDailyOrders = filteredDailyOrders.map(or => 
        <div key={or.id}>
            <OrdersPerDay 
                key={or.id}
                quantity = {or.quantity}
                productName = {or.product_name}
                store_name = {or.store_name}
                or = {or}
            />
        </div>)


            var holder = {};

            filteredDailyOrders.forEach(function(d) {
            if (holder.hasOwnProperty(d.product_name)) {
                holder[d.product_name] = holder[d.product_name] + d.quantity;
            } else {
                holder[d.product_name] = d.quantity;
            }
            });

            var obj2 = [];

            for (var prop in holder) {
            obj2.push({ product_name: prop, quantity: holder[prop] });
            }

            console.log(obj2)


            const mappedTotalDailyOrders = obj2.map(or => 
                <div key={or.quantity}>
                    <TotalDailyOrders
                        key={or.id}
                        quantity = {or.quantity}
                        productName = {or.product_name}
                        or = {or}
                    />
                </div>)

    return(
        <div>
            {mappedDailyOrders?
            <div>
                <div>
                    <h1>Supply to each store</h1>
                    {mappedDailyOrders}
                </div> 
                <div> 
                    <h1>Manufacture or Pack the following total of orders:</h1>
                    {mappedTotalDailyOrders}
                </div>
            </div>

                : 
                null
                }
        </div>
    )
}

export default DailyProduct