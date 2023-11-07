import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./context/user";
import { useContext } from "react";


function OrderForm({products}){


    const {store, setStore} = useContext(UserContext)

    

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
                setQuantity("")
                setNote("")
                setSelected("")
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

function onAddOrder(newOrder){
        console.log(newOrder)
        setStore({...store, orders: [...store.orders, newOrder]})
    
}
    


    return(
        <div>
             <Link to='/orders'>
                    <button  role="button">orders</button>
            </Link>
            <form onSubmit={handleSubmitNewCake}>
                <h1> Add an order </h1>
                <input type= "text" id= "quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="quantity"/>
                <input type= "text" id= "note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="note"/>
                <select value={selected} onChange={(e) => setSelected(e.target.value)} > 
                {products === 0? console.log(true) : products.map((e) => <option key={e.id} value={e.id}> {e.name} </option> )}
                </select>
                <button type="submit"> add order </button>
            </form>
            {errors}
        </div>
    )
}

export default OrderForm


// , {useContext}

// const {store} = useContext(UserContext)

// if (store.length === 0){
//     <div></div>
// }else{
//     console.log(store)
    
// }



{/* <div className= "custom-select">
<select>
<option value="">{e.name}</option>
</select>
</div> */}

// .map((e) => <option key={e.id} >{e.name}</option> )