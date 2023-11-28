import React from "react";
import { OrderContext } from "./context/order";
import { useContext } from "react";
import { useState } from "react";

function OrdersAdmin(){

    const {orders} = useContext(OrderContext)

    const [searchStoreN, setSearchStoreN] = useState("")
    const [searchProduct, setSearchProduct] = useState("")


    const filteredByStored = orders.filter( or => {
        //if state value is empt string return true
            if(searchStoreN === ""){
            return true
            }
        return  or.store_number === parseInt(searchStoreN)
        }
    )

    console.log(filteredByStored)

    
    const filtered_orders = filteredByStored.filter( or => {
        return  or.product_name.toLowerCase().includes(searchProduct.toLocaleLowerCase())
        }
    )

   

    // function handleDeleteClick(or) {
    //     fetch(`/orders/${or.id}`, {
    //       method: "DELETE",
    //     })
    //       .then((r) => r.json())
    //       .then(() => console.log("deleted!"));
    //   }

    //   function onDeleteClick(item){
    //     console.log(item)
    // }

    
    const orderslist = filtered_orders.reverse().map((or) =>
    <div key={or.id}>
        <div className="row">
                    <div className="column">
                        <div className="content">
                            <div className="cards">
                                <div className="card">
                                    <h3>{or.product_name}</h3>
                                        <p>{or.store_number}</p>
                                            <p>Quantity:  {or.quantity}</p>
                                                <p>Note: {or.note}</p>
                                            <p>{new Date(or.created_at).toDateString()}</p>
                                        <p>Created at {new Date(or.created_at).toLocaleTimeString()}</p>
                                    {/* <button onClick={()=>handleDeleteClick(or.id)}>🚮</button> */}
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
                {orderslist}
        </div>
    )
}

export default OrdersAdmin
