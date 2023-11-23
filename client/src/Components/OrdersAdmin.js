import React from "react";
import { OrderContext } from "./context/order";
import { useContext } from "react";
import { useState } from "react";

function OrdersAdmin(){

    const {orders} = useContext(OrderContext)

    const [searchOrder, setSearchOrder] = useState("")
    const [searchProduct, setSearchProduct] = useState("")

    console.log(searchOrder)
    console.log(searchProduct)
    
    console.log(orders)

    const orderslist = orders.map((or) =>
        <div className="row">
                    <div className="column">
                        <div className="content">
                        <div className="cards">
                        <div className="card">
                                <h3>{or.product_name}</h3>
                                <p>Quantity:  {or.quantity}</p>
                                <p>Note: {or.note}</p>
                                <p>{new Date(or.created_at).toDateString()}</p>
                                <p>Created at {new Date(or.created_at).toLocaleTimeString()}</p>
                            </div>
                        </div>
                        </div>
                    </div>
        </div>
    )

    return(
        <div>
                <h1>All Stores' Orders</h1>
                <label className="label"> Search For Store  </label>
                <input type="text" className="input" placeholder="Store Number " onChange={(e)=>setSearchOrder(e.target.value)}/>
                <input type="text" className="input" placeholder="Product Name" onChange={(e)=>setSearchProduct(e.target.value)}/>
                {orderslist}
        </div>
    )
}

export default OrdersAdmin