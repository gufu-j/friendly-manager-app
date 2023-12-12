import React from "react";
import { OrderContext } from "./context/order";
import { useContext } from "react";
import { useState } from "react";
import UpdateAdminOrder from "./UpdateAdminOrder";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';

function OrdersAdmin(){

    const {orders, onDeleteOrder, setOrders} = useContext(OrderContext)

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
    
    const filtered_orders = filteredByStored.filter( or => {
        return  or.product_name.toLowerCase().includes(searchProduct.toLowerCase())
        }
    )

    
    const orderslist = filtered_orders.map((or) =>{

    function handleDeleteClick(){
        // console.log(or.id)
        fetch(`/delete_admin_orders/${or.id}` , {
            method: "DELETE",
        })
        .then((r) => {
                if(r.ok){
                 onDeleteOrder(or)
                } 
            }
        )
    
    }return(
    
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
                                    <button onClick={handleDeleteClick} className="">🚮</button>
                                    <UpdateAdminOrder order = {or}/>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    </div>
    )
        }
    )

    const Delete = async () => {
        fetch(`/delete_all_orders` , {
            method: "DELETE",
        })
        .then((r) => {
                if(r.ok){
                 setOrders([])
                } 
            }
        )
    }

    const submit = () => {
        confirmAlert({
          title: 'Confirm to submit',
          message: 'Are you sure you want to do this? All data will be deleted from the database and reset',
          buttons: [
            {
              label: 'Yes',
              onClick: () => Delete()
            },
            {
              label: 'No',
            }
          ]
        });
      }
    
    return(
        <div>
                <h1>All Stores' Orders</h1>
                    <label className="label"> Search For Store  </label>
                        
                        <input type="text" className="input" placeholder="Store Number " onChange={(e)=>setSearchStoreN(e.target.value)}/>
                         <input type="text" className="input" placeholder="Product Name" onChange={(e)=>setSearchProduct(e.target.value)}/>
                         <div>
                         <button onClick={submit} className="buttonS" >delete all orders</button>
                         </div>
                {orderslist}
        </div>
    )
}

export default OrdersAdmin


