import React from "react";
import { OrderContext } from "./context/order";
import { useContext } from "react";
import { useState } from "react";

function OrdersAdmin(){

    const {orders} = useContext(OrderContext)

    const [searchStoreN, setSearchStoreN] = useState("")
    const [searchProduct, setSearchProduct] = useState("")
    const [searchByDate, setSearchByDate] = useState("")

    console.log(searchStoreN)
    console.log(searchProduct)
    console.log(orders)

    const filtered_orders = orders.filter( s => {
        if( 0 < parseInt(searchStoreN)){
            return s.store_number === parseInt(searchStoreN)
        }else if(searchProduct !== ""){
            console.log(searchProduct)
            return s.product_name.toLowerCase().includes(searchProduct.toLocaleLowerCase())
        }else if(searchByDate !== ""){
            const currentDate = new Date(s.created_at).toDateString();
            return currentDate.toLowerCase().includes(searchByDate.toLocaleLowerCase())
        }else{
            return s
        }
    })

    console.log(filtered_orders)

    const orderslist = filtered_orders.map((or) =>
    <div key={or.id}>
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
    </div>
    )

    return(
        <div>
                <h1>All Stores' Orders</h1>
                <label className="label"> Search For Store  </label>
                <input type="text" className="input" placeholder="Store Number " onChange={(e)=>setSearchStoreN(e.target.value)}/>
                <input type="text" className="input" placeholder="Product Name" onChange={(e)=>setSearchProduct(e.target.value)}/>
                <input type="text" className="input" placeholder="Date" onChange={(e)=>setSearchByDate(e.target.value)}/>
                {orderslist}
        </div>
    )
}

export default OrdersAdmin