import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { UserContext } from "./context/user";


function OrderForm({products, setProducts}){

    console.log(products)


    const [quantity, setQuantity] = useState()
    const [note, setNote] = useState("")
    const [status, setStatus] = useState(false)
    const [selected, setSelected] = useState(null)

    console.log(selected)

   function handleSelect(){

   }



 
    function handleSubmitNewCake(e){
        e.preventDefault()
         const itemData = {
            quantity: quantity,
            note: note,
            status: status
         }
         fetch("/orders",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData),
         })
         .then((r) => r.json())
         .then((data) => console.log(data))

       
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
                <button onClick={ ()=> setStatus(true)}> Toggle Boolean</button>
                <select > 
                {products === 0? console.log(true) : products.map((e) => <option key={e.id} value="" >{e.name} </option> )}
                </select>
                <button type="submit"> add order </button>
            </form>
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