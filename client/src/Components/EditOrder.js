import React from "react";
import { useState } from "react";


function EditOrder({order}){


    const [ modal, setModal] = useState(false);
    const [body, setBody] = useState(order.note);

    console.log(body)

    const toggleModal = () => {
        setModal(!modal);
    }


    // function handleSubmit(){
    //     e.preventDefault()
    //     fetch(`/orders/${order.id}`,{
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },

    //         body: JSON.stringify({
    //             note: body,
    //         }),
    //     })
    //     .then((r) => r.json())
    //     .then((updatedOrder) => console.log(updatedOrder))
    // }



    return(
        <>
        <button onClick={toggleModal} className="button"> edit order </button>

     {modal && (
       <div className="modal">
         <div onClick={toggleModal} className="overlay"></div>
         <div className="modal-content">
           <h1>Edit Order</h1>
           <div>
           {/* <form onSubmit={handleSubmit} >
               <input
               type="text"
               name="name"
               value={body}
               onChange={(e)=> setBody(e.target.value)} 
               placeholder="order"     
               />
               <button type="submit" > Update Review </button>
           </form> */}
           </div>
           <button className="close-modal" onClick={toggleModal}>
             Close
           </button>
         </div>
       </div>
       )}
       </>
    )
}


export default EditOrder