import React from "react";
import { useState } from "react";
import { OrderContext } from "./context/order";
import { useContext } from "react";



function UpdateAdminOrder({order}){

    const {onUpdateOrder} = useContext(OrderContext)


    const [box, setBox] = useState(false);

    const [quantity, setQuantity] = useState(order.quantity)
  
    const [note, setNote]= useState(order.note)
  
    let quantityInterger = parseInt(quantity)
  
    const toggleModal = () => {
      setBox(!box);
    };
  
  
    
        function handleSubmit(e){
        e.preventDefault();
        fetch(`/update_admin_orders/${order.id}`,{
              method: "PATCH",
              headers: {
                  "Content-Type": "application/json",
              },
  
              body: JSON.stringify({
                  note: note,
                  quantity: quantityInterger,
              }),
          })
          .then((r) => r.json())
          .then((updatedOrder) => onUpdateOrder(updatedOrder))
      }
  
  
      if(box) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
    
    return(
        <>
        <button onClick={toggleModal} className="">
        ✍
        </button>
          {box && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
               <div className="modal-content">
                 <div >
                   <h2>Edit order</h2>
                    <form onSubmit={handleSubmit} >
                      <input
                      type="text"
                      name="quantity"
                      value={quantity}
                      onChange={(e)=> setQuantity(e.target.value)} 
                      placeholder="quantity"     
                      />
                      <input
                      type="text"
                      name="note"
                      value={note}
                      onChange={(e)=> setNote(e.target.value)} 
                      placeholder="note" 
                      />
                      <button type="submit"  className="close-modal-one" > Update Review </button>
                     </form> 
                   </div>
                    <button className="close-modal-two" onClick={toggleModal}>
                     Close
                    </button>
                   </div>
                </div>
              )
            }
      </>
    )
}


export default UpdateAdminOrder