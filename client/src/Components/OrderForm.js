import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./context/user";
import { useContext } from "react";
import "./OrderForm.css";
import { ProductContext } from "./context/products";
import {OrderContext} from "./context/order";
import {StoreContext} from "./context/store";



function OrderForm(){

    const {products} = useContext(ProductContext)
    const {store, setStore} = useContext(UserContext) //store state for lower manager that logs in
    const {orders, setOrders} = useContext(OrderContext)
    const {stores, setStores} = useContext(StoreContext) //stores state for top manager that logs in

    let store_id
        if (store.length === 0){
            <div></div>
        }else{
            store_id = store.id
        }

        const [quantity, setQuantity] = useState("")
        const [note, setNote] = useState("")
        const [selected, setSelected] = useState("")
        const [errors, setErrors] = useState([])
            
        let selected_product = parseInt(selected)

 
     function handleSubmitNewCake(e){
        e.preventDefault()
         const itemData = {
            quantity: quantity,
            note: note,
            product_id: selected_product,
            store_id: store_id
            
         }
         fetch("/orders",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData),
         })
         .then((r) => r.json())
         .then((data) => {
            if(!data.errors){
                onAddOrder(data)
                onAddOrderToOrderArray(data)
                setQuantity("")
                setNote("")
                setSelected(selected)
                console.log(data)
                alert (`${data.product_name} has been ordered ` );
                
            }else{
                const errorList = data.errors.map((e) => (
                    <div key={e}>
                        <ul style={{color: "red"}}>{e}</ul>
                    </div>
                ))

                setErrors(errorList)
            }
         })

    }

    function onAddOrderToOrderArray(newOrder){
        let newArr = orders
        newArr.unshift(newOrder)    
        setOrders(newArr)
    }


     function onAddOrder(newOrder){
                setStore({...store, organized_orders: [newOrder, ...store.organized_orders]})    //store state for lower manager that logs in

                const updatedStores = stores.map((s) => { 
                    if(s.id === newOrder.store_number) {
                       return ({ ...s, organized_orders: [newOrder, ...store.organized_orders] })
                       } else {
                       return s
                       }
                     }
                   )
                    setStores(updatedStores) //stores state for top manager that logs in
  
      }

    return(
        <div className="form-box">
            <div className="card_two">
                <div>
                    <form onSubmit={handleSubmitNewCake}>
                        <div className="field1">
                            <h1> Add an order </h1>
                                <input type= "text" id= "quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="quantity"/>
                                    <input type= "text" id= "note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="note"/>
                                    <p>Note: Products are organized alphabethically</p>
                                     <select value={selected} onChange={(e) => setSelected(e.target.value)} className="selection"> 
                                        <option value=""> Pick a Product </option>
                                         {products === 0? null : products.sort(function (a, b) {
                                            if (a.name < b.name) {
                                             return -1;
                                             }
                                            if (a.name > b.name) {
                                             return 1;
                                             }
                                             return 0;
                                             }).map((e) => 
                                        <option key={e.id} value={e.id}> {e.name} </option> 
                                         )}
                            </select>
                        </div>
                        <button type="submit" id="submitBtn" className="button_one" > add order </button>
                    </form>
                    <Link to='/orders'>
                            <button  className="button_two" >check your orders</button>
                    </Link>
                </div>
             </div>

            {errors}
        </div>
    )
}

export default OrderForm

